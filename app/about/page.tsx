"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white px-6 py-20">

      <div className="flex items-center justify-between mb-10">

  {/* Home Button */}
  <a
    href="/"
    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 transition text-sm text-gray-300 hover:text-white"
  >
    Home
  </a>

  {/* Back Button */}
  <button
    onClick={() => window.history.back()}
    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition text-sm text-gray-300 hover:text-white"
  >
    Back
  </button>

</div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            About SaveFusion AI
          </h1>

          <p className="text-gray-400 mt-5 text-lg leading-8">
            Fast, secure and modern video downloading platform
            for creators, students and everyday users.
          </p>

        </div>

        {/* Content */}
        <div className="space-y-14 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What is SaveFusion AI?
            </h2>

            <p>
              SaveFusion AI is an advanced online downloader platform
              that allows users to download videos and audio files
              from multiple popular platforms quickly and easily.
            </p>

            <p className="mt-4">
              Our platform supports YouTube, Instagram, Facebook,
              X/Twitter and more.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h2>

            <p>
              We aim to provide a fast, simple and modern downloading
              experience without unnecessary complexity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                HD Video Downloads
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                MP3 Audio Conversion
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                Multi Platform Support
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                Mobile Friendly Interface
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                Secure Processing
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                No Login Required
              </div>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}