import { useEffect, useRef, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import styles from "./timeline.module.css";
import { FiArrowRight } from "react-icons/fi";
import { TimelineFeature } from "@/constants/types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export default function Timeline({
  features,
  alignment = "left",
}: {
  features: TimelineFeature[];
  alignment?: "left" | "right";
}) {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<TimelineFeature>(
    features[0]
  );

  const [previousFeature, setPreviousFeature] =
    useState<TimelineFeature | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  // Handle feature selection
  const handleFeatureSelect = (feature: TimelineFeature) => {
    if (animating || feature.id === selectedFeature.id) return;

    // Save the current feature as previous before updating
    setPreviousFeature(selectedFeature);
    setAnimating(true);

    // Determine direction based on feature id
    if (feature.id > selectedFeature.id) {
      // Moving down the timeline (to older items)
      setDirection("right");
    } else {
      // Moving up the timeline (to newer items)
      setDirection("left");
    }
    setSelectedFeature(feature);
  };

  // Reset animation state after completion
  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 800); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <div
      className={classNames("w-full flex items-start justify-between", {
        "flex-row-reverse": alignment === "right",
      })}
    >
      <div className="w-full lg:w-[40%] relative">
        {/* Timeline container with continuous line */}
        <div className="relative">
          {/* Adjusted vertical line to start at first dot */}
          <div
            className="absolute left-0 w-0.5 bg-[#ddd9fd] z-0"
            style={{
              top: "1.85rem",
              bottom: "1.85rem",
            }}
          ></div>

          {features.map((feature) => (
            <Collapsible.Root
              key={feature.id}
              open={selectedFeature.id === feature.id && !!feature.content}
              onOpenChange={(open) => {
                // Only call onSelect when opening (to avoid triggering when closing)
                if (open) {
                  handleFeatureSelect(feature);
                }
              }}
              className="relative"
            >
              {/* Item header */}
              <Collapsible.Trigger className="w-full text-left">
                <div className={`flex items-center py-4 md:py-5`}>
                  {/* Circle indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="absolute -left-[0.1rem] top-0 w-[5px] h-[5px] rounded-full bg-secondary z-50" />
                    <div
                      className={`absolute -left-[0.95rem] -top-[0.85rem] w-8 h-8 bg-primary rounded-full`}
                    />

                    {/* Glow effect for selected item */}
                    {selectedFeature.id === feature.id && (
                      <div
                        className={`${styles["glow-effect"]} absolute -left-[0.7rem] -top-[0.6rem] w-6 h-6 bg-[#ddd9fd] rounded-full`}
                      />
                    )}
                  </div>

                  {/* Title - center aligned with dot */}
                  <h3
                    style={{
                      letterSpacing: "-1.3px",
                      transformOrigin: "left center",
                    }}
                    className={`lg:mt-2 text-[2rem] font-600 ml-6 xs:ml-8 md:ml-10 max-xs:text-2xl ${
                      selectedFeature.id === feature.id
                        ? `text-black ${styles["title-active"]}`
                        : `text-black/90 ${styles["title-inactive"]}`
                    } self-center`}
                  >
                    {feature.title}
                  </h3>
                </div>
              </Collapsible.Trigger>

              {/* Expandable content */}
              {feature.content && (
                <Collapsible.Content
                  className={`w-[90%] ml-6 xs:ml-8 md:ml-10 py-2 2xs:py-4 ${styles["timeline-content"]}`}
                >
                  <p className="text-base text-[#373542] mb-2">
                    {feature.content}
                  </p>

                  {feature.showMore && (
                    <button
                      className="flex items-center text-secondary font-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`View details for ${feature.title}`);
                      }}
                    >
                      View Details
                      <FiArrowRight className="ml-1 w-4 h-4 icon" />
                    </button>
                  )}

                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl sm:rounded-[1.2rem] lg:hidden my-6 md:my-8"
                  />
                </Collapsible.Content>
              )}
            </Collapsible.Root>
          ))}
        </div>
      </div>

      <div
        className={classNames(
          "w-[50%] mt-8 rounded-[1.2rem] max-lg:hidden h-[30rem]",
          {
            "h-[28rem]": alignment === "right",
          }
        )}
      >
        <div
          ref={sliderContainerRef}
          className="w-full h-full relative rounded-[1.2rem] overflow-hidden bg-gray-100"
        >
          {/* Animated layers */}
          <AnimatePresence initial={false}>
            {/* When going down the timeline (right direction) */}
            {direction === "right" ? (
              <>
                {/* Base layer - new selected image */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 1 }}
                  key="base-right"
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </div>

                {/* Previous image sliding out */}
                {previousFeature && (
                  <motion.div
                    key={`previous-${previousFeature.id}`}
                    className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                    style={{ zIndex: 2 }}
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    exit={{ x: "-100%" }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.7,
                    }}
                  >
                    <div className="w-full h-full relative rounded-[1.2rem]">
                      <Image
                        src={previousFeature.image}
                        alt={previousFeature.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "1.2rem",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <>
                {/* Base layer - previous image */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 1 }}
                  key="base-left"
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={previousFeature?.image || selectedFeature.image}
                      alt={previousFeature?.title || selectedFeature.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </div>

                {/* New image sliding in */}
                <motion.div
                  key={`selected-${selectedFeature.id}`}
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 2 }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.7,
                  }}
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
