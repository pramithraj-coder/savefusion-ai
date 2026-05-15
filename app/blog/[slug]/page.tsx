import type { Metadata } from "next";
const blogContent: any = {
  "instagram-reel-downloader": {
    title: "Instagram Reel Downloader",
    description:
      "Download Instagram reels online in HD quality using SaveFusion AI.",
  },

  "youtube-shorts-downloader": {
    title: "YouTube Shorts Downloader",
    description:
      "Download YouTube Shorts videos instantly in MP4 and MP3.",
  },

  "facebook-video-downloader": {
    title: "Facebook Video Downloader",
    description:
      "Save Facebook videos online without login or software.",
  },
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const post = blogContent[slug];

  if (!post) {
    return {
      title: "Blog Not Found | SaveFusion AI",
    };
  }

  return {
    title: `${post.title} | SaveFusion AI`,
    
    description: post.description,

    keywords: [
      post.title,
      "video downloader",
      "mp4 downloader",
      "mp3 downloader",
      "savefusion ai",
    ],

    openGraph: {
      title: `${post.title} | SaveFusion AI`,
      description: post.description,
      url: `https://savefusionai.com/blog/${slug}`,
      siteName: "SaveFusion AI",
      type: "article",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogContent[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Blog Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-hidden">
        
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: {
        "@type": "Organization",
        name: "SaveFusion AI",
      },
      publisher: {
        "@type": "Organization",
        name: "SaveFusion AI",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://savefusionai.com/blog/${slug}`,
      },
    }),
  }}
/>

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16">

        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-xl">
            SaveFusion AI Blog
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {post.title}
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-8 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
            {post.description}
          </p>

        </div>

      </section>

      {/* Content Card */}
      <section className="px-6 pb-24">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">

            <div className="space-y-10 text-gray-300 leading-9 text-lg">

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Fast HD Downloads
                </h2>

                <p>
                  SaveFusion AI allows users to download videos in multiple resolutions including HD and Full HD quality.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Easy To Use
                </h2>

                <p>
                  Copy the video URL, paste it into SaveFusion AI and instantly generate download options.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Multiple Formats
                </h2>

                <p>
                  Download MP4 videos or convert them into MP3 audio files with high-speed processing.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Mobile Friendly
                </h2>

                <p>
                  Works perfectly across smartphones, tablets and desktop devices without installing apps.
                </p>
              </div>

            </div>

          </div>

        </div>

{/* CTA Button */}
<div className="text-center mt-14">

  <a
    href="/"
    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
  >
    Download Videos Now
  </a>

</div>

      </section>

    </main>
  );
}