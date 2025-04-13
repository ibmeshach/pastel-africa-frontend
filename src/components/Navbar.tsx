"use client";

import images from "@/public/images";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { navItems } from "@/constants";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import MobileNavigation from "./navigation/MobileNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-lg:bg-[#ffffffb8]">
      <div className="w-full container bg-transparent flex items-center justify-between h-16">
        <div className=" flex items-center gap-12 xl:gap-16">
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
          onClick={() => setIsOpen(!isOpen)}
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

      <AnimatePresence>{isOpen && <MobileNavigation />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
