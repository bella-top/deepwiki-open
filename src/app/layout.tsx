import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Japanese-friendly fonts with fallback configuration
const notoSansJP = Noto_Sans_JP({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  fallback: ['system-ui', 'arial'],
  preload: false, // Disable preloading to avoid build-time network requests
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  fallback: ['serif'],
  preload: false, // Disable preloading to avoid build-time network requests
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ['monospace'],
  preload: false, // Disable preloading to avoid build-time network requests
});

export const metadata: Metadata = {
  title: "Deepwiki Open Source | Sheing Ng",
  description: "Created by Sheing Ng",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
