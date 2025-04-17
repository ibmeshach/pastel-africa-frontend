"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

// Props
interface OscillatingSwiperProps {
  images: (string | StaticImageData)[];
  oscillationDuration?: number;
  scrollSpeed?: number;
  startingDelay?: number;
}

export default function OscillatingSwiper({
  images,
  oscillationDuration = 8,
  scrollSpeed = 0.08,
  startingDelay = 0,
}: OscillatingSwiperProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<{
    direction: number;
    elapsedTime: number;
    currentPosition: number;
  }>({
    direction: 1,
    elapsedTime: -startingDelay,
    currentPosition: 0,
  });

  React.useEffect(() => {
    if (!containerRef.current || images.length === 0) return;

    const scrollContainer = containerRef.current;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    let lastTimestamp: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animate);
        return;
      }

      const state = animationRef.current;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      state.elapsedTime += deltaTime;

      if (state.elapsedTime < 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (state.elapsedTime >= oscillationDuration) {
        state.direction *= -1;
        state.elapsedTime = 0;
      }

      const progress = state.elapsedTime / oscillationDuration;
      const targetPosition =
        state.direction === 1
          ? maxScroll * progress
          : maxScroll * (1 - progress);

      const scrollDelta =
        (targetPosition - state.currentPosition) * scrollSpeed;
      state.currentPosition += scrollDelta;

      scrollContainer.style.transform = `translateX(${-state.currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [images, oscillationDuration, scrollSpeed, startingDelay]);

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ pointerEvents: "none" }}
    >
      <div
        ref={containerRef}
        className="flex gap-4 py-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          willChange: "transform",
          pointerEvents: "none",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            style={{
              width: "calc(80vw - 32px)",
              maxWidth: "360px",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <div
              className="relative w-full"
              style={{
                paddingBottom: "56.25%",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <Image
                src={src}
                alt={`Design ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
                priority={index === 0}
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
