"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

interface AnimateHeaderProps {
  title: string | ReactNode;
  content: string | ReactNode;
  isShort?: boolean;
}

const AnimateHeader: React.FC<AnimateHeaderProps> = ({
  title,
  content,
  isShort = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setAnimationStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animationStarted]);

  return (
    <div className="flex flex-col justify-between items-start gap-2">
      {/* Left side - Title */}
      {React.isValidElement(title) ? (
        title
      ) : (
        <h2 className="text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-500">
          {title}
        </h2>
      )}

      {/* The animated line */}
      <div
        className="mt-5 w-full flex items-start gap-6 md:gap-8"
        ref={containerRef}
      >
        <div className="relative h-[100px] w-[40%] md:w-[50%] lg:w-[60%] 2xl:w-[70%]">
          {/* Horizontal line */}
          <div
            className="absolute top-0 h-[1px] bg-indigo-500 transition-[width] duration-1000 ease-in-out"
            style={{
              width: animationStarted ? "100%" : "0%",
              background:
                "linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(99,102,241,1) 100%)",
            }}
          />

          {/* Vertical line */}
          <div
            className="absolute top-0 right-0 w-[1px] bg-indigo-500 transition-[height] duration-700 ease-out"
            style={{
              height: animationStarted ? (isShort ? "50px" : "70px") : "0px",
              transitionDelay: "1s",
            }}
          />

          {/* Animated dot */}
          <div
            className="absolute right-[-6px] w-3 h-3 rounded-full bg-indigo-500 transition-all duration-500 ease-in-out"
            style={{
              top: isShort ? "50px" : "70px",
              transform: animationStarted ? "scale(1)" : "scale(0)",
              opacity: animationStarted ? 1 : 0,
              transitionDelay: "1.7s",
            }}
          />
        </div>

        {/* Right side - Content */}
        <div className="relative w-[60%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] flex justify-end">
          {/* Description */}
          {React.isValidElement(content) ? (
            content
          ) : (
            <p className="text-xl md:text-2xl font-300">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimateHeader;
