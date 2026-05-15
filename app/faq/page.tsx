"use client";

export default function FAQPage() {
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


      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400 mt-5">
            Everything you need to know about SaveFusion AI.
          </p>

        </div>

        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Is SaveFusion AI free?
            </h2>

            <p className="text-gray-400 mt-3">
              Yes. SaveFusion AI is completely free to use.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Which platforms are supported?
            </h2>

            <p className="text-gray-400 mt-3">
              YouTube, Instagram, Facebook, X/Twitter and more.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Can I download HD videos?
            </h2>

            <p className="text-gray-400 mt-3">
              Yes. Multiple video qualities including HD are supported.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Is registration required?
            </h2>

            <p className="text-gray-400 mt-3">
              No signup or login is required.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Does it work on mobile devices?
            </h2>

            <p className="text-gray-400 mt-3">
              Yes. SaveFusion AI is fully mobile friendly.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}