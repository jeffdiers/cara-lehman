import Image from "next/image";

import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center">
          {/* Image Section */}
          <div className="w-full flex-shrink-0 items-center justify-center md:w-1/3">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/about-me.webp"
                alt="Cara Lehman"
                fill
                className="object-cover"
                priority
              />
            </div>

            <SocialLinks />
            <div className="mt-4 flex items-center justify-center gap-4">
              caramarie221@gmail.com
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold">About Cara</h1>

            <div className="space-y-4 text-lg">
              <p>
                Cara Lehman&rsquo;s passion for storytelling began at the age of
                eight, when she received her first camera with a Jr. nature
                magazine catalog. What started as a curiosity for the world
                around her quickly blossomed into a deep admiration for the
                creative process and visual communication.
              </p>

              <p>
                For the past five years, Cara has been working in New York City,
                immersing herself in the fast-paced and dynamic world of
                production. With a BFA in Film and Television from The Savannah
                College of Art and Design, she has built a diverse portfolio
                across multiple roles, including Shooting, Producing, Directing,
                and Photography.
              </p>

              <p>
                In addition to her Film/TV and other large-scale contributions,
                Cara has a keen eye for short-form content creation, producing
                engaging visuals across platforms such as Instagram Reels,
                TikTok, Snapchat and YouTube Shorts.
              </p>

              <p>
                When Cara isn&rsquo;t behind the lens, you can find her in a
                movie theater, diving into the vibrant NYC creative scene,
                perfecting her culinary creations, or spending valuable time
                doing absolutely nothing with her 2 cats, Rosemary and Nutmeg.
              </p>
            </div>

            <div className="mt-8">
              <Button className="px-6">
                <a href="mailto:caramarie221@gmail.com">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
        {/* photo gallry section */}
        <section className="mt-12">
          <h2 className="mb-8 text-3xl font-bold">Photo Gallery</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative aspect-square h-full w-full">
                <Image
                  src={`/gallery-${index + 1}.webp`}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
