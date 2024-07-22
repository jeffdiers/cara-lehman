import type { Metadata } from "next";
import { Inter, Caprasimo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Footer, Header } from "@/components/nav-menus";

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
        <main className="relative flex flex-col justify-between bg-background text-foreground min-h-screen">
          <Providers>
            <Header />

            {children}
            {modals}

            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
