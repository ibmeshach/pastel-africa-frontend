"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MousePosition {
  x: number;
  y: number;
}

const Performance = () => {
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
    <div className="w-full">
      <div className="container w-full flex flex-col gap-20 py-8 xs:py-12 sm:py-20"></div>
    </div>
  );
};

export default Performance;
