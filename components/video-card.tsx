"use client";

import { ExternalLink } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { canEmbed, getEmbedUrl } from "@/lib/video-embed";

import { Button } from "@/components/ui/button";

interface VideoModalProps {
  url: string;
  img?: string;
}

export function VideoCard({ url, img }: VideoModalProps) {
  const embedUrl = getEmbedUrl(url);
  const canEmbedVideo = canEmbed(url);

  return (
    <div className="min-h-0 flex-1 overflow-auto">
      {canEmbedVideo && embedUrl ? (
        <div className="relative h-0 overflow-hidden rounded-md pb-[56.25%]">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="sr-only mb-6 text-center text-muted-foreground">
            This content cannot be embedded directly.
          </p>
          {img && (
            <div className="relative inset-0 aspect-[16/9] h-full w-full">
              <Image
                src={img || "/placeholder.svg"}
                alt="Video thumbnail"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}

          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button variant="outline" className="mt-4">
              Open in new tab <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
