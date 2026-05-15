import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: "Video URL is required" },
        { status: 400 }
      );
    }

    // YOUR yt-dlp path
    const command = `yt-dlp -j "${url}"`;

    const data = await new Promise<string>((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(stderr || error.message);
          return;
        }

        resolve(stdout);
      });
    });

    const info = JSON.parse(data);

    return NextResponse.json({
      success: true,
      title: info.title,
      thumbnail: info.thumbnail,
      duration: info.duration,
      uploader: info.uploader,
      view_count: info.view_count,
      formats: info.formats
  ?.filter(
    (f: any) =>
      f.url &&
      (
        // Video formats
        (
          f.ext === "mp4" &&
          f.vcodec !== "none" &&
          f.height
        ) ||

        // Audio formats
        (
          f.acodec !== "none" &&
          f.vcodec === "none"
        )
      )
  )
  .map((f: any) => ({
    format_id: f.format_id,
    ext: f.ext,
    url: f.url,
    height: f.height,
    filesize: f.filesize,
    filesize_approx: f.filesize_approx,
    vcodec: f.vcodec,
    acodec: f.acodec,
    abr: f.abr,
  }))
  .sort((a: any, b: any) => {
    return (b.height || 0) - (a.height || 0);
  }),
    });

  } catch (error) {
    console.error("Download API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch video details",
      },
      { status: 500 }
    );
  }
}