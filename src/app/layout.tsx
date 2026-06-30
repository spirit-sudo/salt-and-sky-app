import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Wild Moon Ranch | Julian, CA Vacation Rental",
    description: defaultDescription,
    images: [
      {
        url: "/photos/entryway-mountain-view.jpg",
        width: 1200,
        height: 800,
        alt: "Wild Moon Ranch entryway with mountain views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Moon Ranch | Julian, CA Vacation Rental",
    description: defaultDescription,
    images: ["/photos/entryway-mountain-view.jpg"],
  },
};

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
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
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
