import type { Metadata } from "next";

import { Geist, Geist_Mono, Taviraj } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const tavirajSerif = Taviraj({
  variable: "--font-tavira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cara Lehman",
  description: "Visual storytelling through photography and cinematography ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tavirajSerif.variable} ${geistSans.variable} ${geistMono.variable} bg-background font-serif text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
