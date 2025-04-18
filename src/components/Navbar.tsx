"use client";

import images from "@/public/images";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavigation from "./navigation/MobileNavigation";
import { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const prevScrollPosRef = useRef<number>(0);

  // For debugging
  useEffect(() => {
    console.log("Mobile nav isOpen state:", isOpen);
  }, [isOpen]);

  useEffect(() => {
    // Set initial scroll position when component mounts
    prevScrollPosRef.current = window.scrollY;

    // Function to handle scroll events
    const handleScroll = (): void => {
      const currentScrollPos: number = window.scrollY;
      const isScrollingUp: boolean =
        prevScrollPosRef.current > currentScrollPos;

      // Always show navbar when scrolling up, hide when scrolling down
      // Regardless of position on the page
      if (currentScrollPos < 10) {
        setVisible(true); // Always show navbar at the very top of the page
      } else {
        setVisible(isScrollingUp);
      }

      // Update previous scroll position using ref
      prevScrollPosRef.current = currentScrollPos;
    };

    // Throttle the scroll event to improve performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = (): void => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 10); // Small timeout for performance
      }
    };

    window.addEventListener("scroll", throttledScrollHandler);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array, using ref instead

  const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="fixed top-0 w-full z-50 bg-[#ffffffb8] lg:bg-[#f5f5f7db] backdrop-blur-xl"
      style={{
        backdropFilter: "opacity(100%) blur(15px)",
      }}
      initial={{ translateY: 0 }}
      animate={{ translateY: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-full container bg-transparent flex items-center justify-between h-16">
        <div className="flex items-center gap-12 xl:gap-16">
          <Image alt="logo" className="w-16" src={images.logo} />
          <Navigation />
        </div>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
          <button className="text-sm text-[#605c7a] font-500 px-2.5">
            Login
          </button>
          <button className="bg-secondary text-white px-4 py-2 rounded-xl">
            Get Started
          </button>
        </div>

        <button
          onClick={toggleMobileNav}
          className="lg:hidden relative w-7 h-7 flex items-center justify-center focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-5 flex items-center justify-center">
            <span
              className={`absolute h-0.5 w-5 bg-secondary rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>

            <span
              className={`absolute h-0.5 w-5 bg-secondary rounded-sm transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`absolute h-0.5 w-5 bg-secondary rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && <MobileNavigation onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
