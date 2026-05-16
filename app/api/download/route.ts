import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          error: "Video URL is required",
        },
        { status: 400 }
      );
    }

    // =========================
// YOUTUBE HANDLER (COBALT)
// =========================


if (
  url.includes("youtube.com") ||
  url.includes("youtu.be")
) {
  return NextResponse.json(
    {
      success: false,
      error:
        "YouTube downloads are temporarily unavailable. Please use Instagram or Facebook links.",
    },
    { status: 400 }
  );
}


    // =========================
    // INSTAGRAM/FACEBOOK
    // =========================

    const command = `yt-dlp -j "${url}"`;

    const output = await new Promise<string>(
      (resolve, reject) => {
        exec(
          command,
          {
            maxBuffer: 1024 * 1024 * 20,
          },
          (error, stdout, stderr) => {

            if (error) {
              reject(stderr || error.message);
              return;
            }

            resolve(stdout);
          }
        );
      }
    );

    const info = JSON.parse(output);

    return NextResponse.json({
      success: true,
      title: info.title,
      thumbnail: info.thumbnail,
      duration: info.duration,
      uploader: info.uploader,
      view_count: info.view_count,

      formats: Array.from(
  new Map(

    info.formats
      ?.filter(
        (f: any) =>
          f.url &&
          f.ext === "mp4" &&
          f.vcodec !== "none" &&
          f.acodec !== "none" &&
          f.height
      )

      .map((f: any) => ({
        format_id: f.format_id,
        ext: f.ext,
        url: f.url,
        height: f.height,
        filesize: f.filesize,
        filesize_approx: f.filesize_approx,
        qualityLabel:
          f.height >= 2160
            ? "4K (Ultra HD)"
            : f.height >= 1440
            ? "2K"
            : f.height >= 1080
            ? "1080p (Full HD)"
            : f.height >= 720
            ? "720p (HD)"
            : f.height >= 480
            ? "480p (SD)"
            : f.height >= 360
            ? "360p (SD)"
            : "240p (SD)",
      }))

      .sort((a: any, b: any) => b.height - a.height)

      .map((item: any) => [item.height, item])

  ).values()
),

  } catch (error: any) {

    console.error("Download API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}