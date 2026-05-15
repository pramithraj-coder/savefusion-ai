import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaveFusion AI - Video & MP3 Downloader",
  description:
    "Download videos and MP3 from YouTube, Instagram, Facebook, X/Twitter and more with SaveFusion AI.",

  keywords: [
    "video downloader",
    "youtube downloader",
    "instagram downloader",
    "mp3 downloader",
    "facebook video downloader",
    "twitter video downloader",
    "savefusion ai"
  ],

  metadataBase: new URL("http://localhost:3000"),

  alternates: {
  canonical: "/",
},

  openGraph: {
    title: "SaveFusion AI",
    description:
      "Download videos and MP3 files from multiple platforms instantly.",
    url: "http://localhost:3000",
    siteName: "SaveFusion AI",
    type: "website",

    images: [
  {
    url: "/icon.png",
    width: 512,
    height: 512,
    alt: "SaveFusion AI Logo",
  },
],
  },

  twitter: {
  card: "summary_large_image",
  title: "SaveFusion AI",
  description:
    "Download videos and MP3 instantly from YouTube, Instagram and more.",
  images: ["/icon.png"],
},

  robots: {
    index: true,
    follow: true,
  },
icons: {
  icon: "/icon.png",
  shortcut: "/icon.png",
  apple: "/icon.png",
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

  {/* Schema Markup */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "SaveFusion AI",
        url: "https://savefusionai.com",
        description:
          "Download videos and MP3 from YouTube, Instagram, Facebook, X/Twitter and more.",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://savefusionai.com/?url={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />

  {children}

</body>
    </html>
  );
}
