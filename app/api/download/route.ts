import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { success: false, error: "Video URL is required" },
        { status: 400 }
      );
    }

    // Remove playlist params from YouTube URLs
    const cleanUrl = url.split("&list=")[0];

    const proxy = `http://${process.env.PROXY_USERNAME}:${process.env.PROXY_PASSWORD}@${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`;

    const command =
      `yt-dlp ` +
      `--proxy "${proxy}" ` +
      `--user-agent "com.google.android.youtube/19.09.37 (Linux; Android 11)" ` +
      `--extractor-args "youtube:player_client=android" ` +
      `--no-playlist ` +
      `--geo-bypass ` +
      `--dump-single-json ` +
      `"${cleanUrl}"`;

    console.log("Running:", command);

    const data = await new Promise<string>((resolve, reject) => {
      exec(
        command,
        {
          maxBuffer: 1024 * 1024 * 20,
        },
        (error, stdout, stderr) => {
          if (error) {
            console.error("YT-DLP ERROR:", stderr);

            reject(stderr || error.message);
            return;
          }

          resolve(stdout);
        }
      );
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
              (
                f.ext === "mp4" &&
                f.vcodec !== "none" &&
                f.height
              ) ||
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