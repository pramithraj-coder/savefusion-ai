"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Home() {
const [url, setUrl] = useState("");
const [loading, setLoading] = useState(false);
const [videoData, setVideoData] = useState<any>(null);
const resultRef = useRef<HTMLDivElement>(null);
const getPlatform = () => {
  if (url.includes("instagram")) {
    return {
      name: "Instagram",
      color: "from-pink-500 to-purple-500",
    };
  }

  if (url.includes("youtube") || url.includes("youtu.be")) {
    return {
      name: "YouTube",
      color: "from-red-500 to-red-700",
    };
  }

  if (url.includes("facebook")) {
    return {
      name: "Facebook",
      color: "from-blue-500 to-blue-700",
    };
  }

  if (url.includes("twitter") || url.includes("x.com")) {
    return {
      name: "X/Twitter",
      color: "from-gray-700 to-black",
    };
  }

  return {
    name: "Video",
    color: "from-purple-500 to-blue-500",
  };
};

const handleDownload = async () => {
  if (!url) return;

  try {
    setLoading(true);

    const response = await fetch("/api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    console.log(data);

    setVideoData(data);

    setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 200);

  } catch (error) {
    console.error(error);

  } finally {
    setLoading(false);
  }
};

  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-hidden">

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SaveFusion AI",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Download videos and MP3 from YouTube, Instagram, Facebook, X/Twitter and more.",
      url: "http://localhost:3000/",
    }),
  }}
/>
    
      {/* Background Glow Effects */}
<div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-3xl"></div>

<div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-3xl"></div>
      
      {/* Navbar */}
      <header className="w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            SaveFusion AI
          </h1>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/blog" className="hover:text-white transition"> 
            Blog
            </a>

            <a href="/faq" className="hover:text-white transition">
              FAQ
            </a>

            <a href="/about" className="hover:text-white transition">
              About
            </a>

            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section className="flex items-center justify-center min-h-screen px-4 py-16 md:px-6">
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center max-w-4xl w-full px-2"
>
    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
      Download Videos & MP3
      <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        From Any Platform
      </span>
    </h2>

    {/* Subheading */}
    <p className="text-gray-400 mt-5 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
      Download Instagram reels, YouTube videos, Facebook videos,
      Twitter/X clips and more instantly.
    </p>

    {/* Platform Tabs */}
<div className="flex flex-wrap justify-center gap-3 mt-8">

  {/* Instagram */}
  <button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm sm:text-base min-w-[120px]">
    Instagram
  </button>

  {/* YouTube */}
  <button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm sm:text-base min-w-[120px]">
    YouTube
  </button>

{/* Facebook */}
<button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm sm:text-base min-w-[120px]">
  Facebook
</button>

  {/* X/Twitter */}
  <button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm sm:text-base min-w-[120px]">
    X/Twitter
  </button>

  {/* MP3 */}
  <button className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm sm:text-base min-w-[120px]">
    MP3
  </button>

</div>

    {/* URL Input */}
<div className="mt-10 relative w-full max-w-5xl mx-auto">

  {/* Glow Border */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20"></div>

  {/* Main Box */}
  <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-3 sm:p-4 flex flex-col md:flex-row items-center gap-4 backdrop-blur-xl shadow-2xl">

    {/* Input */}
    <div className="flex items-center w-full">

  <input
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Paste Instagram, YouTube or Facebook link here..."
    className="w-full bg-transparent outline-none px-3 sm:px-4 py-4 text-white text-base sm:text-lg placeholder:text-gray-500"
  />

  {/* Paste Button */}
  <button
    onClick={async () => {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    }}
    className="mr-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium whitespace-nowrap"
  >
    Paste
  </button>

</div>

      {/* Download Button */}
    <button
  onClick={handleDownload}
  className="w-full md:w-auto px-12 py-4 whitespace-nowrap rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 font-semibold text-lg"
>
  {loading ? (
  <div className="flex items-center gap-3">
    
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>

    <span>Fetching...</span>

  </div>
) : (
  "Download Now"
)}
</button>

  </div>

</div>
{/* Video Result */}
{videoData && (
  <div ref={resultRef}>
  <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
    <div className="flex flex-col items-center text-center gap-6">
</div>
      
      {/* Thumbnail */}
<img
  src={`/api/proxy-image?url=${encodeURIComponent(
    videoData.thumbnail ||
    videoData.thumbnails?.[videoData.thumbnails.length - 1]?.url
  )}`}
  alt={videoData.title}
  className="block mx-auto w-full max-w-[420px] h-auto rounded-2xl object-cover shadow-2xl"
/>

      {/* Info */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center">

        <div className="flex items-center gap-3 mb-2">

  <div
    className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getPlatform().color}`}
  >
    {getPlatform().name}
  </div>

</div>

<h3 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
  {videoData.title}
</h3>

        <p className="text-gray-400 mt-2 text-lg">
          {videoData.uploader}
        </p>

        {(() => {
  const videoFormat = videoData.formats?.find(
    (f: any) =>
      f.ext === "mp4" &&
      f.url &&
      f.vcodec !== "none"
  );

  const size =
    videoFormat?.filesize ||
    videoFormat?.filesize_approx;

  const sizeMB = size
    ? (size / (1024 * 1024)).toFixed(2)
    : "Unknown";

  return (
    <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-400">
  <p>
    Duration: {videoData.duration} sec
  </p>

  <span className="text-gray-600">•</span>

  <p>
    Size: {sizeMB} MB
  </p>
</div>
  );
})()}
        

        {/* Download Button */}
       {/* DOWNLOAD SECTIONS */}
<div className="mt-6 space-y-4 w-full">

  {/* VIDEO DOWNLOADS */}
  <div>

    <h4 className="text-xl font-bold mb-4 text-white">
      🎬 Video Downloads
    </h4>

    <div className="space-y-3">

      {videoData.formats
        ?.filter(
          (f: any) =>
            f.url &&
            f.ext === "mp4" &&
            f.vcodec !== "none"
        )
        .map((format: any, index: number) => {

          const size =
            format.filesize ||
            format.filesize_approx;

          const sizeMB = size
            ? (size / (1024 * 1024)).toFixed(2)
            : "HD";

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-lg hover:border-purple-500/40 transition"
            >

              <div className="flex flex-col text-left">

                <span className="font-semibold text-white">
                  {format.height
                    ? `${format.qualityLabel}p`
                    : "HD Video"}
                </span>

                <span className="text-sm text-gray-400">
                  {sizeMB} MB
                </span>

              </div>

              <a
                href={format.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition"
              >
                Download
              </a>

            </div>
          );
        })}

    </div>

  </div>

  {/* AUDIO DOWNLOADS */}
  <div>

    <h4 className="text-xl font-bold mb-4 text-white">
      🎵 Audio Downloads
    </h4>

    <div className="space-y-3">

      {videoData.formats
        ?.filter(
          (f: any) =>
            f.url &&
            f.acodec !== "none" &&
            f.vcodec === "none"
        )
        .map((format: any, index: number) => {

          const size =
            format.filesize ||
            format.filesize_approx;

          const sizeMB = size
            ? (size / (1024 * 1024)).toFixed(2)
            : "Audio";

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-lg hover:border-purple-500/40 transition"
            >

              <div className="flex flex-col text-left">

                <span className="font-semibold text-white">
                  {format.abr
                    ? `${format.abr} kbps`
                    : "MP3 Audio"}
                </span>

                <span className="text-sm text-gray-400">
                  {sizeMB} MB
                </span>

              </div>

              <a
                href={format.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
              >
                Download
              </a>

            </div>
          );
        })}

    </div>

  </div>

</div>

      </div>
    </div>
  </div>
)}

    {/* Small Trust Text */}
    <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
      <span>No Login Required</span>
      <span>HD Downloads</span>
      <span>Fast Processing</span>
      <span>Mobile Friendly</span>
    </div>

  </motion.div>
</section>

{/* Stats Section */}
<section className="px-6 pb-20">

  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-5"
    >

      {/* Stat 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          10M+
        </h3>

        <p className="text-gray-400 mt-3">
          Downloads Processed
        </p>
      </div>

      {/* Stat 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          500K+
        </h3>

        <p className="text-gray-400 mt-3">
          Active Users
        </p>
      </div>

      {/* Stat 3 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          99%
        </h3>

        <p className="text-gray-400 mt-3">
          Uptime Reliability
        </p>
      </div>

    </motion.div>

  </div>

</section>

{/* Features Section */}
<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-4xl font-bold">
        Why Choose SaveFusion AI?
      </h3>

      <p className="text-gray-400 mt-4">
        Fast, secure and modern video downloading experience.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          HD Video Downloads
        </h4>

        <p className="text-gray-400">
          Download videos in high quality including HD and Full HD formats.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-blue-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          MP3 Conversion
        </h4>

        <p className="text-gray-400">
          Convert videos into MP3 audio instantly with fast processing.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-pink-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          Multi Platform Support
        </h4>

        <p className="text-gray-400">
          Supports Instagram, YouTube, Facebook, X/Twitter and more.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-green-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          Fast Processing
        </h4>

        <p className="text-gray-400">
          Lightning-fast servers provide quick download generation.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-yellow-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          Mobile Friendly
        </h4>

        <p className="text-gray-400">
          Optimized perfectly for smartphones, tablets and desktops.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-cyan-500 transition">
        <h4 className="text-2xl font-semibold mb-4">
          Secure & Private
        </h4>

        <p className="text-gray-400">
          Your downloads remain private with secure processing methods.
        </p>
      </div>

    </div>

  </div>

</section>

{/* SEO Content Section */}
<section className="py-24 px-6">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-4xl font-bold">
        Download Videos Easily With SaveFusion AI
      </h3>

      <p className="text-gray-400 mt-4">
        SaveFusion AI allows you to download videos and MP3 files from multiple platforms quickly and securely.
      </p>
    </div>

    <div className="space-y-14 text-gray-300 leading-8">

      {/* Instagram */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          Instagram Reels Downloader
        </h4>

        <p>
          Download Instagram reels, videos and public content instantly using SaveFusion AI.
          Simply paste your Instagram reel link into the downloader box and generate high-quality downloads in seconds.
        </p>
      </div>

      {/* YouTube */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          YouTube Video & MP3 Downloader
        </h4>

        <p>
          SaveFusion AI supports YouTube video downloads and MP3 audio conversion.
          Download videos in HD quality or convert them into MP3 format with fast cloud processing.
        </p>
      </div>

      {/* Facebook */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          Facebook Video Downloader
        </h4>

        <p>
          Easily download public Facebook videos directly to your device.
          SaveFusion AI works smoothly across desktop and mobile devices.
        </p>
      </div>

      {/* Twitter */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          X/Twitter Video Downloader
        </h4>

        <p>
          Download videos and clips from X/Twitter instantly without installing any software or application.
        </p>
      </div>

      {/* MP3 */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          Fast MP3 Downloads
        </h4>

        <p>
          Convert videos into MP3 audio quickly and download music, podcasts and audio content directly to your device.
        </p>
      </div>

    </div>

  </div>

</section>
{/* FAQ Section */}
<section className="py-24 px-6">

  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-4xl font-bold">
        Frequently Asked Questions
      </h3>

      <p className="text-gray-400 mt-4">
        Everything you need to know about SaveFusion AI.
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-6">

      {/* FAQ 1 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-semibold">
          Is SaveFusion AI free to use?
        </h4>

        <p className="text-gray-400 mt-3">
          Yes. SaveFusion AI allows users to download videos and MP3 files for free.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-semibold">
          Which platforms are supported?
        </h4>

        <p className="text-gray-400 mt-3">
          SaveFusion AI supports Instagram, YouTube, Facebook, X/Twitter and more platforms.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-semibold">
          Can I download MP3 audio files?
        </h4>

        <p className="text-gray-400 mt-3">
          Yes. Videos can be converted into MP3 format for audio downloads.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-semibold">
          Is registration required?
        </h4>

        <p className="text-gray-400 mt-3">
          No registration or login is required to use SaveFusion AI.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-semibold">
          Does SaveFusion AI work on mobile devices?
        </h4>

        <p className="text-gray-400 mt-3">
          Yes. The platform is fully optimized for smartphones, tablets and desktop devices.
        </p>
      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="border-t border-white/10 py-12 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          SaveFusion AI
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Download videos and MP3 files from Instagram, YouTube, Facebook,
          X/Twitter and more platforms instantly.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">
          Quick Links
        </h4>

        <ul className="space-y-3 text-gray-400">
          <li><a href="/"
 className="hover:text-white">Home</a></li>
          <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="text-lg font-semibold mb-4">
          Legal
        </h4>

        <ul className="space-y-3 text-gray-400">
          <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
          <li><a href="/dmca" className="hover:text-white">DMCA</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom Footer */}
    <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
      © 2026 SaveFusion AI. All rights reserved.
    </div>

  </div>

</footer>
    </main>
  );
}