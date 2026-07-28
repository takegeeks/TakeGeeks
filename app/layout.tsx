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
  metadataBase: new URL("https://takegeeks.com"),

  title: {
    default: "TakeGeeks",
    template: "%s | TakeGeeks",
  },

  description:
    "Become a Software Engineer by building real products through a Software Engineering Apprenticeship.",

  verification: {
    google: "BXY5PcV74cvOOH8WQEh1xHVnb_DORlGjjvE2GIezXJA",
  },

  alternates: {
    canonical: "https://takegeeks.com",
  },

  openGraph: {
    title: "TakeGeeks",
    description:
      "Become a Software Engineer by building real products.",
    url: "https://takegeeks.com",
    siteName: "TakeGeeks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}