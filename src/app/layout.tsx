import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orchestrix.vercel.app"),
  title: "Orchestrix — Next-Gen AI Data Automation Platform",
  description:
    "Transform your data workflows with AI-powered automation. Process, analyze, and automate at scale with enterprise-grade reliability. Trusted by 2,000+ teams.",
  keywords: [
    "AI automation",
    "data automation",
    "AI platform",
    "workflow automation",
    "data pipelines",
    "enterprise AI",
    "machine learning",
    "data processing",
  ],
  authors: [{ name: "Orchestrix" }],
  creator: "Orchestrix",
  publisher: "Orchestrix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automateai.vercel.app",
    siteName: "Orchestrix",
    title: "Orchestrix — Next-Gen AI Data Automation Platform",
    description:
      "Transform your data workflows with AI-powered automation. Process, analyze, and automate at scale with enterprise-grade reliability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orchestrix — AI Data Automation Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchestrix — Next-Gen AI Data Automation Platform",
    description:
      "Transform your data workflows with AI-powered automation. Process, analyze, and automate at scale.",
    images: ["/og-image.png"],
    creator: "@orchestrix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://orchestrix.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#172B36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden relative" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
