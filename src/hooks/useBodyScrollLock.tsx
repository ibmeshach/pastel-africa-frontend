"use client";
import { useEffect } from "react";

export const useBodyScrollLock = () => {
  // Store the original overflow style to restore it later
  const originalStyle =
    typeof window !== "undefined"
      ? {
          overflow: document.body.style.overflow,
          paddingRight: document.body.style.paddingRight,
        }
      : { overflow: "", paddingRight: "" };

  // Lock the body scroll
  const lockScroll = () => {
    if (typeof window === "undefined") return;

    // Calculate scroll bar width to prevent layout shift
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Apply styles to lock scrolling
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    // Disable touch actions for mobile
    document.documentElement.style.touchAction = "none";

    // Create an invisible overlay that catches all wheel events
    const overlay = document.createElement("div");
    overlay.id = "scroll-lock-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "9999";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "all";

    // Add wheel event listener to prevent scroll
    overlay.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      { passive: false }
    );

    // Add the overlay to the DOM
    if (!document.getElementById("scroll-lock-overlay")) {
      document.body.appendChild(overlay);
    }
  };

  // Unlock the body scroll
  const unlockScroll = () => {
    if (typeof window === "undefined") return;

    // Restore original styles
    document.body.style.overflow = originalStyle.overflow;
    document.body.style.paddingRight = originalStyle.paddingRight;
    document.documentElement.style.touchAction = "";

    // Remove the overlay if it exists
    const overlay = document.getElementById("scroll-lock-overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, []);

  return { lockScroll, unlockScroll };
};
