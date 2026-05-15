"use client";

export default function ContactPage() {
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

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-5 text-lg leading-8">
            Have questions, feedback or DMCA requests?
            Get in touch with us anytime.
          </p>

        </div>

        {/* Contact Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6 text-gray-300">

              <div>
                <p className="text-white font-semibold">
                  Email
                </p>

                <p className="text-gray-400 mt-1">
                  support@savefusionai.com
                </p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Response Time
                </p>

                <p className="text-gray-400 mt-1">
                  Usually within 24-48 hours
                </p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Support
                </p>

                <p className="text-gray-400 mt-1">
                  Technical Support, Feedback & DMCA Requests
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}