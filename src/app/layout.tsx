import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Kimeu Masila | Web Developer & Data Analyst",
  description:
    "Portfolio of Daniel Kimeu Masila - Web Developer & Data Analyst. I craft responsive websites with React, Next.js, TailwindCSS, and deliver analytics solutions using SQL, Python, Excel, and Power BI.",
  keywords: [
    "Daniel Kimeu Masila",
    "Web Developer",
    "Data Analyst",
    "React",
    "Next.js",
    "TailwindCSS",
    "SQL",
    "Python",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Kimeu Masila" }],
  openGraph: {
    title: "Daniel Kimeu Masila | Web Developer & Data Analyst",
    description:
      "I craft responsive websites and deliver data-driven insights with React, Next.js, SQL, Python, Excel, and Power BI.",
    url: "https://kimeu-devdata.vercel.app",
    siteName: "Daniel Masila Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Daniel Kimeu Masila Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-950 dark:text-white  bg-gray-200 transition-colors`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
