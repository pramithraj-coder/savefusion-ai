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

      const response = await fetch(
        "https://co.wuk.sh/api/json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            url,
            vQuality: "1080",
            filenamePattern: "classic",
            isAudioOnly: false,
          }),
        }
      );

      const data = await response.json();

      console.log("COBALT:", data);

      if (data.status === "error") {
        return NextResponse.json(
          {
            success: false,
            error: data.text || "YouTube fetch failed",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        title: data.filename || "YouTube Video",
        thumbnail: data.thumbnail,
        duration: "",
        uploader: "YouTube",
        formats: [
          {
            format_id: "1080",
            ext: "mp4",
            url: data.url,
            height: 1080,
            filesize: null,
            filesize_approx: null,
            vcodec: "h264",
            acodec: "aac",
            abr: null,
          },
        ],
      });
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

      formats: info.formats
        ?.filter(
          (f: any) =>
            f.url &&
            (
              (
                f.ext === "mp4" &&
                f.vcodec !== "none"
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