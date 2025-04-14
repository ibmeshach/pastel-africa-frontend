"use client";

import classNames from "classnames";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Timeline from "./timeline/Timeline";
import images from "@/public/images";
import { TimelineFeature } from "@/constants/types";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Advanced typography",
    content:
      "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design. ",
    showMore: true,
    path: "#",
    image: images.design.image1,
  },
  {
    id: 2,
    title: "CSS grids and layouts",
    content:
      "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
    showMore: true,
    path: "#",
    image: images.design.image2,
  },
  {
    id: 3,
    title: "Adaptive design",
    content:
      "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
    showMore: false,
    path: "#",
    image: images.design.image3,
  },
  {
    id: 4,
    title: "Designed for efficiency",
    content:
      "Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.",
    showMore: false,
    path: "#",
    image: images.design.image4,
  },
];

const Design = () => {
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
          Design pixel-perfect sites beyond ordinary
        </motion.h1>

        <Timeline features={features} />
      </div>
    </div>
  );
};

export default Design;
