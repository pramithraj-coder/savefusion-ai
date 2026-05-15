"use client";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Introduction
            </h2>

            <p>
              SaveFusion AI respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use and safeguard your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>

            <p>
              We may collect non-personal information such as browser type,
              device information, pages visited and general analytics data
              to improve website performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Cookies
            </h2>

            <p>
              SaveFusion AI may use cookies and similar technologies to improve
              functionality, analyze traffic and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Services
            </h2>

            <p>
              We may use third-party services including analytics tools and
              advertising partners such as Google AdSense.
              These services may collect data according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Security
            </h2>

            <p>
              We implement reasonable security measures to protect user information.
              However, no online platform can guarantee complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              External Links
            </h2>

            <p>
              Our website may contain links to third-party websites.
              We are not responsible for the privacy practices or content
              of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Changes To This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time.
              Continued use of SaveFusion AI means you accept any updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy,
              you may contact us through our Contact page.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}