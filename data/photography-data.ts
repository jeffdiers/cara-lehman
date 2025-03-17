type PhotoCategory = "portrait" | "fashion" | "landscape";

type AspectRatio = "16/9" | "9/16";

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategory;
  aspectRatio: AspectRatio;
}

export const photographyData: Photo[] = [
  {
    id: 1,
    src: "/photography/photography-amberly-1.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "16/9",
  },
  {
    id: 2,
    src: "/photography/photography-amberly-2.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "9/16",
  },
  {
    id: 3,
    src: "/photography/photography-amberly-3.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "16/9",
  },
  {
    id: 4,
    src: "/photography/photography-dresses-1.webp",
    alt: "Fashion photography",
    category: "fashion",
    aspectRatio: "9/16",
  },
  {
    id: 5,
    src: "/photography/photography-dresses-2.webp",
    alt: "Fashion photography",
    category: "fashion",
    aspectRatio: "9/16",
  },
  {
    id: 6,
    src: "/photography/photography-dresses-3.webp",
    alt: "Fashion photography",
    category: "fashion",
    aspectRatio: "9/16",
  },
  {
    id: 7,
    src: "/photography/photography-dresses-4.webp",
    alt: "Fashion photography",
    category: "fashion",
    aspectRatio: "16/9",
  },
  {
    id: 8,
    src: "/photography/photography-dresses-5.webp",
    alt: "Fashion photography",
    category: "fashion",
    aspectRatio: "16/9",
  },
  {
    id: 9,
    src: "/photography/photography-friend-1.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "16/9",
  },
  {
    id: 10,
    src: "/photography/photography-friend-2.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "16/9",
  },
  {
    id: 11,
    src: "/photography/photography-self-1.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "16/9",
  },
  {
    id: 12,
    src: "/photography/photography-self-2.webp",
    alt: "Portrait photography",
    category: "portrait",
    aspectRatio: "9/16",
  },
  {
    id: 13,
    src: "/photography/photography-snow-1.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "16/9",
  },
  {
    id: 14,
    src: "/photography/photography-snow-2.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "16/9",
  },
  {
    id: 15,
    src: "/photography/photography-snow-3.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "16/9",
  },
  {
    id: 16,
    src: "/photography/photography-snow-4.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "9/16",
  },
  {
    id: 17,
    src: "/photography/photography-snow-5.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "16/9",
  },
  {
    id: 18,
    src: "/photography/photography-snow-6.webp",
    alt: "Snow photography",
    category: "landscape",
    aspectRatio: "16/9",
  },
];
