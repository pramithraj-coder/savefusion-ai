"use client";
export default function BlogPage() {
  const blogs = [
    {
      title: "Instagram Reel Downloader",
      slug: "instagram-reel-downloader",
      description:
        "Download Instagram reels in HD quality instantly using SaveFusion AI.",
    },

    {
      title: "YouTube Shorts Downloader",
      slug: "youtube-shorts-downloader",
      description:
        "Download YouTube Shorts videos in HD and MP3 format.",
    },

    {
      title: "Facebook Video Downloader",
      slug: "facebook-video-downloader",
      description:
        "Save Facebook videos online with high-speed downloads.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1020] text-white px-6 py-20">

            <div className="flex items-center justify-between mb-12">

  {/* Home Button */}
  <a
    href="/"
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

    

    <span className="relative">Home</span>
  </a>

  {/* Back Button */}
  <button
    onClick={() => window.history.back()}
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

    <span className="relative">Back</span>

  </button>

</div>

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-12 text-center">
          SaveFusion AI Blog
        </h1>

        <div className="grid gap-8">

          {blogs.map((blog, index) => (
            <a
              key={index}
              href={`/blog/${blog.slug}`}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition block"
            >
              <h2 className="text-3xl font-bold">
                {blog.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-8">
                {blog.description}
              </p>
            </a>
          ))}

        </div>
      </div>
    </main>
  );
}