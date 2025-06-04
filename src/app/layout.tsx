import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
        className="antialiased"
        style={{
          "--font-geist-sans": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          "--font-serif-jp": "Georgia, 'Times New Roman', serif",
          "--font-geist-mono": "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        } as React.CSSProperties}
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