"use client";

import { ExternalLink } from "lucide-react";

import Link from "next/link";

import { canEmbed, getEmbedUrl } from "@/lib/video-embed";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export function VideoModal({ isOpen, onClose, title, url }: VideoModalProps) {
  const embedUrl = getEmbedUrl(url);
  const canEmbedVideo = canEmbed(url);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-h-[90vh] flex-col overflow-hidden sm:max-w-[800px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {canEmbedVideo ? "Video player" : "External content"}
            </DialogDescription>
          </div>
        </DialogHeader>

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
            <div className="flex flex-col items-center justify-center py-12">
              <p className="mb-6 text-center text-muted-foreground">
                This content cannot be embedded directly.
              </p>
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button>
                  Open in new tab <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
