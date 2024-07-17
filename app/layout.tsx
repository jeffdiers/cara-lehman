import type { Metadata } from "next";
import { Inter, Caprasimo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import HistoryProvider from "@/lib/history-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
});

export const metadata: Metadata = {
  title: "Jeff Diers",
  description: "Hire me!",
};

export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          caprasimo.variable,
          inter.variable
        )}
      >
        <HistoryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {modals}
          </ThemeProvider>
        </HistoryProvider>
      </body>
    </html>
  );
}
