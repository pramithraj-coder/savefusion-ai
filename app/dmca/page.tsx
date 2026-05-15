"use client";
export default function DMCA() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          DMCA Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Copyright Policy
            </h2>

            <p>
              SaveFusion AI respects the intellectual property rights of others
              and expects users to do the same.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              No Media Hosting
            </h2>

            <p>
              SaveFusion AI does not host any copyrighted media files on its servers.
              All content is accessed from publicly available third-party sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              DMCA Takedown Requests
            </h2>

            <p>
              If you believe your copyrighted content is being accessed improperly
              through our platform, you may submit a DMCA takedown request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Required Information
            </h2>

            <p>
              Your DMCA notice should include:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your full name and contact information</li>
              <li>Description of the copyrighted work</li>
              <li>The exact URL or content reference</li>
              <li>A statement of good faith belief</li>
              <li>Your signature or authorized verification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Response Time
            </h2>

            <p>
              We will review valid DMCA complaints and take appropriate action
              within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact
            </h2>

            <p>
              DMCA-related requests may be submitted through our Contact page.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}