"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const doubled = [...images, ...images];

  return (
    <div className="group relative w-full overflow-hidden rounded-xl">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `slide-gallery ${images.length * 4}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative shrink-0 overflow-hidden rounded-xl"
            style={{ width: 220, height: 320 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="220px"
              priority={i < images.length}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide-gallery {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
