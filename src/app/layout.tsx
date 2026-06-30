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

const siteUrl = "https://wild-moon-ranch--bradhylton.replit.app";
const siteName = "Wild Moon Ranch";
const defaultDescription =
  "Wild Moon Ranch is a secluded short-term rental in Julian, CA — stargazing, a wood-burning fireplace, and mountain air 90 minutes from San Diego. Check availability and book direct.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wild Moon Ranch | Julian, CA Vacation Rental",
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
    title: "Wild Moon Ranch | Julian, CA Vacation Rental",
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Moon Ranch | Julian, CA Vacation Rental",
    description: defaultDescription,
  },
};

// LodgingBusiness schema grounds the entity for Google, AI Overviews, and
// assistants like ChatGPT/Perplexity so they can correctly cite the rental
// as a real, bookable place tied to Julian, CA (AEO/GEO entity signal).
const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteName,
  description: defaultDescription,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Julian",
    addressRegion: "CA",
    postalCode: "92036",
    addressCountry: "US",
  },
  priceRange: "$$",
  telephone: "+1-555-555-5555",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
