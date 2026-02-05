import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hafidz Thufail | Full Stack Developer",
  description: "Portfolio website of Hafidz Thufail - Full Stack Developer specializing in React, Next.js, and Node.js. Building digital experiences with passion and precision.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "Indonesia"],
  authors: [{ name: "Hafidz Thufail" }],
  openGraph: {
    title: "Hafidz Thufail | Full Stack Developer",
    description: "Building digital experiences with passion and precision.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
