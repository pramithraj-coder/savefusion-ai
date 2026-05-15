"use client";

export default function TermsPage() {
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
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Acceptance of Terms
            </h2>

            <p>
              By using SaveFusion AI, you agree to comply with these
              Terms & Conditions. If you do not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Use of Service
            </h2>

            <p>
              SaveFusion AI provides tools for downloading publicly accessible
              media content for personal and educational use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              User Responsibility
            </h2>

            <p>
              Users are solely responsible for how they use downloaded content.
              Users must respect copyright laws and the terms of the original platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Prohibited Activities
            </h2>

            <p>
              Users may not use SaveFusion AI for illegal activities,
              copyright infringement, harmful distribution or unauthorized sharing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Service Availability
            </h2>

            <p>
              We may modify, suspend or discontinue any part of the service
              at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Platforms
            </h2>

            <p>
              SaveFusion AI is not affiliated with YouTube, Instagram,
              Facebook, X/Twitter or any third-party platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Limitation of Liability
            </h2>

            <p>
              SaveFusion AI shall not be held responsible for any misuse,
              damages or legal consequences resulting from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Changes to Terms
            </h2>

            <p>
              These Terms & Conditions may be updated periodically.
              Continued use of the website means you accept any modifications.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}