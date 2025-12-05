import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Rupom Sarker",
  description:
    "A passionate Bangladeshi video editor with over 4 years of experience crafting cinematic stories and impactful visual content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-base-100`}
      >
        <header className="z-50 lg:sticky lg:top-0 px-5 lg:px-0">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
