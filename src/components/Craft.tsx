"use client";

import classNames from "classnames";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "./shared/timeline/Timeline";
import images from "@/public/images";

const features = [
  {
    id: 1,
    title: "Advanced interaction timeline",
    content:
      "Design smooth, multi-step animations with a timeline-based editor for complete control.",
    showMore: false,
    path: "#",
    image: images.craft.image5,
  },
  {
    id: 2,
    title: "Custom timing editor",
    content:
      "Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more. ",
    showMore: false,
    path: "#",
    image: images.craft.image6,
  },
  {
    id: 3,
    title: "Advanced triggers",
    content:
      "Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.",
    showMore: false,
    path: "#",
    image: images.craft.image7,
  },
  {
    id: 4,
    title: "Achieve limitless precision",
    content:
      "Create flawless, interactive designs visually with unmatched accuracy and finesse.",
    showMore: false,
    path: "#",
    image: images.craft.image8,
  },
];

const Craft = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="w-full">
      <div className="container flex flex-col gap-20 py-8 xs:py-12 sm:py-20">
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
            letterSpacing: "-5px",
            lineHeight: "1.1em",
            backgroundImage:
              "linear-gradient(90deg, #000 0%, #000 50%, #aaaaaa 50.001%, #aaaaaa 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className={classNames(
            "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-500 text-black"
          )}
        >
          Craft engaging and immersive interactions{" "}
        </motion.h1>

        <Timeline features={features} alignment="right" />
      </div>
    </div>
  );
};

export default Craft;
