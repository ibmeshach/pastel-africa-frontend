"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import AnimateHeader from "./shared/AnimateHeader";
import icons from "@/public/icons";

const { appIntegrationIcons } = icons;

const AppIntegration = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="container w-full flex flex-col gap-20 py-8 xs:py-12 sm:py-20">
        <AnimateHeader
          title={
            <h2 className="text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
              App
              <br />
              integration
            </h2>
          }
          content={
            <p className="text-xl md:text-2xl">
              Connect your go-to apps effortlessly within the builder for a
              smooth and uninterrupted workflow.
            </p>
          }
        />

        <div className="grid grid-cols-4 md:grid-cols-6 gap-[1px]">
          {appIntegrationIcons?.map((Icon, index) => {
            return (
              <motion.div
                key={index}
                className={classNames({
                  "w-full rounded-2xl flex items-center justify-center py-6 lg:py-8 relative":
                    true,
                  "bg-[#c9c2fb]": hoveredIndex === index,
                  "bg-[#ebe8fe]": hoveredIndex !== index,
                })}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                animate={{
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "blur(2px)"
                      : "blur(0px)",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  width={45}
                  height={45}
                  src={Icon}
                  alt="image icon"
                  className={`transition-all w-[30px] h-[32px] lg:w-fit lg:h-fit duration-300 rounded-2xl ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppIntegration;
