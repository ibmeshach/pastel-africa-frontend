"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import classNames from "classnames";
import ScaleBusinesContentCard from "./shared/ScaleBusinesContentCard";
import { scaleBusinessContentCards } from "@/constants";

interface MousePosition {
  x: number;
  y: number;
}

const Scale = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInTextView = useInView(ref, { once: true, amount: 0.3 });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // For the cards stacking animation
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={containerRef} className="w-full bg-black my-20">
      <div className="container w-full flex flex-col gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32 py-16 xs:py-20 sm:py-32">
        <motion.h1
          ref={ref}
          initial={{ backgroundPosition: "100% 0" }}
          animate={
            isInTextView
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
              "linear-gradient(90deg, #fff 0%, #fff 50%, #aaaaaa 50.001%, #aaaaaa 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className={classNames(
            "w-[95%] text-white text-5xl xl:text-6xl 2xl:text-8xl font-500"
          )}
        >
          Scale your <br /> business with{" "}
        </motion.h1>

        <div ref={cardsContainerRef} className="w-full relative min-h-[200vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {" "}
            {/* Added top offset */}
            {scaleBusinessContentCards?.map((card, index) => {
              const totalCards = scaleBusinessContentCards.length;
              const scrollSegment = 0.8 / totalCards;
              const startPoint = index * scrollSegment;
              const endPoint = startPoint + scrollSegment;

              const cardProgress = useTransform(
                scrollYProgress,
                [startPoint, endPoint],
                [0, 1]
              );

              const cardY = useTransform(
                cardProgress,
                [0, 1],
                ["100vh", "0vh"]
              );

              const cardOpacity = useTransform(
                cardProgress,
                [0, 0.3, 1],
                [0, 1, 1]
              );

              return (
                <motion.div
                  key={card.id}
                  className="w-full absolute left-0"
                  style={{
                    y: cardY,
                    opacity: cardOpacity,
                    zIndex: index,
                  }}
                  initial={{ y: "100vh", opacity: 0 }}
                >
                  <ScaleBusinesContentCard
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
