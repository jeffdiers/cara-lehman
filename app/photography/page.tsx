"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

import { type Photo, photographyData } from "@/data/photography-data";

// Photo categories for filtering
const categories = [
  { id: "all", name: "All" },
  { id: "portrait", name: "Portrait" },
  { id: "landscape", name: "Landscape" },
  { id: "fashion", name: "Fashion" },
];

export default function PhotographyGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPhotos, setFilteredPhotos] =
    useState<Photo[]>(photographyData);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [columns, setColumns] = useState(3);

  // Filter photos based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPhotos(photographyData);
    } else {
      setFilteredPhotos(
        photographyData.filter((photo) => photo.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  // Responsive columns based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute photos into columns for masonry layout
  const getPhotoColumns = () => {
    const photoColumns = Array.from({ length: columns }, () => []) as Photo[][];

    filteredPhotos.forEach((photo, index) => {
      photoColumns[index % columns].push(photo);
    });

    return photoColumns;
  };

  return (
    <div className="pt-12 md:pt-24">
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4">Photography Portfolio</h1>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="flex gap-4">
          {getPhotoColumns().map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-4">
              {column.map((photo) => (
                <div
                  key={photo.id}
                  className="relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.01] hover:shadow-lg"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div
                    className={`relative w-full`}
                    style={{ aspectRatio: photo.aspectRatio }}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative h-full max-h-[90vh] w-full max-w-5xl">
              <div className="relative h-full w-full">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cara Lehman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
