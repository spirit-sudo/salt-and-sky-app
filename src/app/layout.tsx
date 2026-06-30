import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://salt-and-sky-app--bradhylton.replit.app";
const siteName = "Linear Progression";
const defaultDescription =
  "Linear Progression CrossFit coaching — group classes, 1-on-1 programming, competition prep, and video lessons.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Linear Progression | CrossFit Coaching",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Linear Progression | CrossFit Coaching",
    description: defaultDescription,
    images: [
      {
        url: "/coach-daimino.jpg",
        width: 1200,
        height: 1200,
        alt: "Coach Daimino Stewart, Linear Progression CrossFit coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linear Progression | CrossFit Coaching",
    description: defaultDescription,
    images: ["/coach-daimino.jpg"],
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
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
