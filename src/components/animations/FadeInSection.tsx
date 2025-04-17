"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // More pronounced opacity transition
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1], // Adjust these values to control when the fade starts/ends
    [0, 1, 1, 0] // Opacity values corresponding to scroll positions
  );

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
};
