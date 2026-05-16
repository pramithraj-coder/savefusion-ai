import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          error: "URL required",
        },
        { status: 400 }
      );
    }

    const response = await fetch("https://co.wuk.sh/api/json", {
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
    });

    const data = await response.json();

    console.log(data);

    if (data.status === "error") {
      return NextResponse.json(
        {
          success: false,
          error: data.text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      title: data.filename,
      thumbnail: data.thumbnail,
      uploader: "YouTube",
      duration: "",
      formats: [
        {
          ext: "mp4",
          url: data.url,
          height: 1080,
          filesize: null,
          filesize_approx: null,
          vcodec: "h264",
          acodec: "aac",
        },
      ],
    });

  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}