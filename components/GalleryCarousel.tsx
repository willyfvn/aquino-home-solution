"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const doubled = [...images, ...images];
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div
      className="group relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
    >
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `slide-gallery ${images.length * 4}s linear infinite`,
          animationPlayState: isInteracting ? "paused" : "running",
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
      `}</style>
    </div>
  );
}
