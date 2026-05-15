"use client";
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white px-6 py-20">

      <div className="flex items-center justify-between mb-10">

  {/* Home Button */}
  <a
    href="/"
    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 transition text-lg text-gray-300 hover:text-white"
  >
    Home
  </a>

  {/* Back Button */}
  <button
    onClick={() => window.history.back()}
    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition text-lg text-gray-300 hover:text-white"
  >
    Back
  </button>

</div>

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Disclaimer
        </h1>

        <div className="space-y-8 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              General Information
            </h2>

            <p>
              SaveFusion AI is provided for educational and personal use purposes only.
              We do not encourage copyright infringement or unauthorized downloading
              of protected content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              No Content Hosting
            </h2>

            <p>
              SaveFusion AI does not host any videos, audio files or media content
              on its servers. All content is fetched directly from publicly available sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Copyright Responsibility
            </h2>

            <p>
              Users are solely responsible for ensuring they have the legal right
              to access and download any content using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Platforms
            </h2>

            <p>
              SaveFusion AI is not affiliated with or endorsed by YouTube,
              Instagram, Facebook, X/Twitter or any other third-party platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Limitation of Liability
            </h2>

            <p>
              We are not responsible for misuse of the platform,
              downloaded content or any damages resulting from use of the service.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}