import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

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
  description: "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
  keywords: "CSV analyzer, data analysis, browser tool, privacy-first, large files, DuckDB, WebAssembly, data cleaning, SQL filtering",
  authors: [{ name: "TableStream.io" }],
  robots: "index, follow",
  openGraph: {
    title: "TableStream.io - Analyze Massive CSV Files Instantly in Your Browser",
    description: "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
    url: "https://tablestream.io",
    siteName: "TableStream.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TableStream.io - Analyze Massive CSV Files Instantly in Your Browser",
    description: "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
