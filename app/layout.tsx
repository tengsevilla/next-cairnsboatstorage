import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const description =
  "Cairns Boat Storage offers the best value in secure, long and short-term boat, trailer, truck, and container storage. 24/7 access, no size limits, near the boat ramp.";

const ogDescription =
  "Affordable and secure boat, trailer, and container storage near Cairns boat ramp with 24/7 access and no size restrictions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cairns Boat Storage | Secure 24/7 Boat & Trailer Parking",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Cairns boat storage",
    "secure boat storage",
    "24/7 trailer parking",
    "long term boat storage Cairns",
    "short term boat parking",
    "container storage Cairns",
    "truck and machinery storage",
    "Cairns boat ramp storage",
    "industrial storage Cairns"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Cairns Boat Storage | 24/7 Secure Parking",
    description: ogDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_AU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cairns Boat Storage - Safe and Accessible 24/7"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cairns Boat Storage | 24/7 Secure Parking",
    description: ogDescription,
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">

      <body className={`${gantari.variable} antialiased min-h-screen flex flex-col`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-gray-900 focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
