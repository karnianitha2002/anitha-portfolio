import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anitha Karni | Data Science & GIS Portfolio",
  description:
    "Portfolio of Anitha Karni, a data science graduate student with experience in GIS analysis, spatial data modeling, dashboards, and applied machine learning.",
  keywords: [
    "Anitha Karni",
    "Data Science Portfolio",
    "GIS Analyst",
    "Spatial Data Analysis",
    "Machine Learning",
    "University of Arizona",
  ],
  authors: [{ name: "Anitha Karni" }],
  openGraph: {
    title: "Anitha Karni | Data Science & GIS Portfolio",
    description:
      "Geospatial analytics, machine learning, and dashboard-driven storytelling for environmental and public-health data.",
    siteName: "Anitha Karni Portfolio",
    images: [
      {
        url: "/og-atlas.svg",
        width: 1200,
        height: 630,
        alt: "Anitha Karni portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anitha Karni | Data Science & GIS Portfolio",
    description:
      "Geospatial analytics, machine learning, and dashboard-driven storytelling.",
    images: ["/og-atlas.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
