"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VanImage() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <Image
        src="/Aquino_Van_nobg.png"
        alt="Aquino Home Solutions service van"
        width={600}
        height={400}
        className={triggered ? "animate-van-drive-in" : "opacity-0"}
      />
    </div>
  );
}
