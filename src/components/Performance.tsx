"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import classNames from "classnames";
import images from "@/public/images";

interface MousePosition {
  x: number;
  y: number;
}

const performances = [
  {
    id: 1,
    title: "Clean code output",
    content:
      "Droip generates minimal, well-structured code that is free from unnecessary bloat ensuring efficiency.",
    showMore: false,
    path: "#",
    image: images.performance.performance2,
  },
  {
    id: 2,
    title: "Keep website lightweight",
    content:
      "Optimized code means faster load times, improved performance, and a smoother user experience.",
    showMore: false,
    path: "#",
    image: images.performance.performance1,
  },
];

const Performance = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0.5,
    y: 0.5,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setMousePosition({ x: 0.5, y: 0.5 });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
    setIsHovering(true);

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  const indigoStops = `
  rgba(62, 45, 146, 0.5) 0%,  
  rgba(30, 22, 69, 0.3) 40%,  
  rgba(0, 0, 0, 0.2) 70%, 
  transparent 100%
`;

  const whiteStops = `
  rgba(255, 255, 255, 0.04) 0%,  
  transparent 60%
`;

  return (
    <div className="w-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
        className="w-full bg-black"
      >
        {/* Indigo Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: isHovering
              ? `radial-gradient(circle at ${mousePosition.x * 100}% ${
                  mousePosition.y * 100
                }%, ${indigoStops})`
              : "transparent",
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          style={{
            mixBlendMode: "screen",
            zIndex: 1,
          }}
        />

        {/* White Highlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: isHovering
              ? `radial-gradient(circle at ${mousePosition.x * 100}% ${
                  mousePosition.y * 100
                }%, ${whiteStops})`
              : "transparent",
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          style={{
            mixBlendMode: "overlay",
            zIndex: 1,
          }}
        />

        <div className="container w-full flex flex-col justify-center items-center gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32 py-16 xs:py-20 sm:py-32">
          <motion.h1
            ref={ref}
            initial={{ backgroundPosition: "100% 0" }}
            animate={
              isInView
                ? {
                    backgroundPosition: "0% 0",
                  }
                : {
                    backgroundPosition: "100% 0",
                  }
            }
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.2,
            }}
            style={{
              letterSpacing: "-3.2px",
              lineHeight: "1.1em",
              backgroundImage:
                "linear-gradient(90deg, #fff 0%, #fff 50%, #aaaaaa 50.001%, #aaaaaa 100%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "100% 0",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className={classNames(
              "w-[90%] 2xs:w-[75%] sm:w-[65%] md:w-[55%] xl:w-[50%] text-white text-center text-[2.55rem] 2xs:text-[2.7rem] xs:text-[3rem] lg:text-[4rem] font-600"
            )}
          >
            Performance that sets you apart{" "}
          </motion.h1>

          <div className="w-full flex max-lg:flex-col items-center gap-6">
            {performances.map((performance, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-6 bg-[#1A1A1A] rounded-[1.125rem] "
              >
                <div className="flex flex-col gap-5 text-white p-10 pb-0">
                  <h2
                    style={{
                      letterSpacing: "-2px",
                      lineHeight: "38px",
                    }}
                    className="text-[2rem] font-600 "
                  >
                    {performance.title}
                  </h2>
                  <p
                    style={{
                      letterSpacing: "0px",
                    }}
                    className="w-full 2xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[80%] text-base font-500 opacity-[0.72]"
                  >
                    {performance.content}
                  </p>
                </div>
                <Image
                  className="rounded-br-[1.125rem]"
                  alt="performance1"
                  src={performance.image}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Performance;
