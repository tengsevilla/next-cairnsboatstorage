import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cairns Boat Storage | Secure 24/7 Boat & Trailer Parking",
  description:
    "Cairns Boat Storage offers the best value in secure, long and short-term boat, trailer, truck, and container storage. 24/7 access, no size limits, near the boat ramp.",
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
  openGraph: {
    title: "Cairns Boat Storage | 24/7 Secure Parking",
    description:
      "Affordable and secure boat, trailer, and container storage near Cairns boat ramp with 24/7 access and no size restrictions.",
    url: "https://www.cairnsboatyard.com.au",
    siteName: "Cairns Boat Storage",
    images: [
      {
        url: "https://www.cairnsboatyard.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cairns Boat Storage - Safe and Accessible 24/7"
      }
    ],
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${gantari.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
