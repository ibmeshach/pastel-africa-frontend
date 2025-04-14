"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

const Cta: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0.5,
    y: 0.5,
  });
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setMousePosition({ x: 0.5, y: 0.5 });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const indigoStops = `
    rgba(62, 45, 146, 0.9) 0%,
    rgba(30, 22, 69, 0.6) 60%,
    rgba(0, 0, 0, 0.4) 120%,
    transparent 180%
  `;

  const whiteStops = `
    rgba(255, 255, 255, 0.08) 0%,
    transparent 120%
  `;

  return (
    <div className="w-full py-10">
      <motion.div
        className="container flex max-md:flex-col max-xs:gap-6 max-md:gap-8 lg:items-center justify-between rounded-[1.125rem] p-8 sm:p-10 md:p-12 lg:p-16"
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        {/* Indigo Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, ${indigoStops})`,
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
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, ${whiteStops})`,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          style={{
            mixBlendMode: "overlay",
            zIndex: 1,
          }}
        />

        {/* Text Content */}
        <h1
          className="w-[70%] 2xs:w-[60%] sm:w-[50%] md:w-[40%] xl:w-[35%] 2xl:w-[30%] text-white text-[2.55rem] 2xs:text-[2.7rem] xs:text-[3rem] lg:text-[4rem] font-500"
          style={{
            letterSpacing: "-3px",
            lineHeight: "1em",
            position: "relative",
            zIndex: 2,
          }}
        >
          Get Started For Free
        </h1>
        <div
          className="w-full md:w-[40%] xl:w-[35%] 2xl:w-[30%] flex flex-col gap-7"
          style={{ position: "relative", zIndex: 2 }}
        >
          <p className="text-sm text-white">
            Experience the power of Droip no-code website builder, risk free.
            Create stunning, responsive sites with pure creative freedom.
          </p>
          <button className="flex items-center justify-center text-base lg:text-lg gap-1.5 bg-secondary text-white py-2 px-6 rounded-[1.125rem]">
            <span>Try for Free</span>
            <FiChevronRight className="text-xl text-gray-300" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
