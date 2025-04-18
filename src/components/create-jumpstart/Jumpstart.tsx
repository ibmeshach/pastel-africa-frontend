"use client";

import icons from "@/public/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import SwipesSection from "./swiper/SwipesSection";

const Jumpstart = () => {
  useEffect(() => {
    // Create the effect element that will be positioned fixed on the screen
    const effectElement = document.createElement("div");
    effectElement.id = "jumpstart-mouse-effect";
    effectElement.style.position = "fixed";
    effectElement.style.pointerEvents = "none";
    effectElement.style.width = "800px";
    effectElement.style.height = "800px";
    effectElement.style.borderRadius = "50%";
    effectElement.style.background = `radial-gradient(circle at center,
      rgba(99, 82, 255, 0.4),
      rgba(82, 67, 255, 0.2) 40%,
      rgba(71, 56, 255, 0.1) 60%,
      transparent 80%)`;
    effectElement.style.transform = "translate(-50%, -50%)";
    effectElement.style.mixBlendMode = "screen";
    effectElement.style.opacity = "0";
    effectElement.style.transition = "opacity 0.2s ease";
    effectElement.style.zIndex = "9999";
    document.body.appendChild(effectElement);

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("jumpstart-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Check if mouse is over the swiper
      const swiperColumn = document.querySelector(".swiper-column");
      if (swiperColumn) {
        const swiperRect = swiperColumn.getBoundingClientRect();
        if (
          e.clientX >= swiperRect.left &&
          e.clientX <= swiperRect.right &&
          e.clientY >= swiperRect.top &&
          e.clientY <= swiperRect.bottom
        ) {
          return;
        }
      }

      // Calculate distance from component bounds
      const distanceFromTop = e.clientY - rect.top;
      const distanceFromBottom = rect.bottom - e.clientY;
      const distanceFromLeft = e.clientX - rect.left;
      const distanceFromRight = rect.right - e.clientX;

      // Define how far away from the component the effect should still be visible
      const effectRange = 200; // pixels

      // Check if mouse is within the component or within range
      const isWithinComponent =
        distanceFromTop > 0 &&
        distanceFromBottom > 0 &&
        distanceFromLeft > 0 &&
        distanceFromRight > 0;

      const isWithinRange =
        distanceFromTop > -effectRange &&
        distanceFromBottom > -effectRange &&
        distanceFromLeft > -effectRange &&
        distanceFromRight > -effectRange;

      // Store current visibility state
      const shouldBeVisible = isWithinComponent || isWithinRange;

      // Update the effect element
      const effect = document.getElementById("jumpstart-mouse-effect");
      if (effect) {
        effect.style.opacity = shouldBeVisible ? "1" : "0";
        effect.style.left = `${e.clientX}px`;
        effect.style.top = `${e.clientY}px`;
      }
    };

    // Add global mouse move listener
    document.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      // Clean up the effect element when component unmounts
      const effect = document.getElementById("jumpstart-mouse-effect");
      if (effect && effect.parentNode) {
        effect.parentNode.removeChild(effect);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <motion.div
        id="jumpstart-section"
        style={{
          position: "relative",
          overflow: "visible",
          backgroundColor: "#000000",
        }}
        className="w-full py-20 flex flex-col gap-10"
      >
        {/* We'll keep this div for compatibility but we won't use it for the effect */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: 0,
          }}
        />

        <div className="container flex flex-col gap-10 relative z-[1001]">
          <div className="max-lg:hidden flex w-full">
            <div className="w-[52%]"></div>
            <motion.h1
              className={`w-[48%] text-[150px] font-600 text-white`}
              transition={{ duration: 0.5 }}
            >
              Or
            </motion.h1>
          </div>

          <div className="w-full flex flex-col max-lg:gap-12">
            <h1
              className="flex lg:self-end w-[70%] 2xs:w-[60%] sm:w-[50%] text-white text-[2.55rem] 2xs:text-[2.7rem] xs:text-[3rem] lg:text-[4rem] font-500"
              style={{
                letterSpacing: "-3px",
                lineHeight: "1em",
                position: "relative",
                zIndex: 2,
              }}
            >
              Jumpstart your business with beautifully crafted themes and
              sections{" "}
            </h1>
            <Image alt="rocket" src={icons.rocket} className="w-12" />
          </div>
        </div>

        <div className="relative z-[1]">
          <SwipesSection />
        </div>
      </motion.div>
    </div>
  );
};

export default Jumpstart;
