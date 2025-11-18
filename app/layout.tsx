import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO-friendly Metadata with OG & Twitter
export const metadata: Metadata = {
  title: "LowTag – Affordable Shopping in Kenya",
  description:
    "Discover the best deals and flash sales on electronics, fashion, and more with LowTag – your trusted online marketplace in Kenya.",
  keywords: ["LowTag", "Kenya", "Deals", "Shopping", "Electronics", "Flash Sales"],
  authors: [{ name: "Allan Mathenge", url: "https://allan-portfolio-website.vercel.app/" }],
  themeColor: "#00BFA6", // teal/brand color
  openGraph: {
    title: "LowTag – Affordable Shopping in Kenya",
    description:
      "Discover the best deals and flash sales on electronics, fashion, and more with LowTag – your trusted online marketplace in Kenya.",
    url: "https://lowtag-ecommerce-site.vercel.app/",
    siteName: "LowTag",
    images: [
      {
        url: "https://lowtag-ecommerce-site.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "LowTag - Deals and Flash Sales",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header visible on all pages */}
        <Header />
        <StoreProvider>

        {/* Main content */}
        {children}

        </StoreProvider>


        {/* Footer visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}
