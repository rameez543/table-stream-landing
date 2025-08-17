import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TableStream.io - Analyze Massive CSV Files Instantly in Your Browser",
  description:
    "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
  keywords:
    "CSV analyzer, data analysis, browser tool, privacy-first, large files, DuckDB, WebAssembly, data cleaning, SQL filtering, CSV viewer, data processing, big data, client-side analytics",
  authors: [{ name: "TableStream.io" }],
  creator: "TableStream.io",
  publisher: "TableStream.io",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://tablestream.io",
  },
  category: "Data Analysis Tools",
  classification: "Business Software",
  other: {
    "google-site-verification": "x_Hf3NYNtISnhIx1ZBIev3oQTReqTZ5O6QwHnt_oxxs",
    "msvalidate.01": "your-bing-verification-code-here",
  },
  openGraph: {
    title:
      "TableStream.io - Analyze Massive CSV Files Instantly in Your Browser",
    description:
      "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
    url: "https://tablestream.io",
    siteName: "TableStream.io",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tablestream.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TableStream.io - CSV Analysis Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TableStream.io - Analyze Massive CSV Files Instantly in Your Browser",
    description:
      "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
    site: "@tablestream",
    creator: "@tablestream",
    images: ["https://tablestream.io/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://tablestream.io" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="x_Hf3NYNtISnhIx1ZBIev3oQTReqTZ5O6QwHnt_oxxs"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="39.7392, -104.9903" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
