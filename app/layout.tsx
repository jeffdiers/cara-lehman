import type { Metadata } from "next";
import { Inter, Caprasimo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Footer, Header } from "@/components/nav-menus";
import Image from "next/image";
import background from "@/public/background.png";

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
        <main className="relative flex flex-col justify-between bg-background/75 text-foreground min-h-screen">
          {/* Background Image */}
          <Image
            src={background} // Replace with the actual image path
            alt="Background"
            layout="fill" // Makes the image cover the entire parent container
            objectFit="cover" // Ensures the image covers the container
            objectPosition="center" // Optional: center the image
            priority // Optional: prioritize loading for background images
            className="-z-10" // Ensures the image is behind all content
            placeholder="blur" // Optional: blur the image while loading
          />

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
