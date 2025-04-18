import { navItems } from "@/constants";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface MobileNavigationProps {
  onClose?: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onClose }) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  // For debugging
  useEffect(() => {
    console.log("MobileNavigation mounted");
    return () => console.log("MobileNavigation unmounted");
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = (itemId: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#FCFCFD] overflow-y-auto"
    >
      <div className="container py-4 flex flex-col gap-4">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 py-3.5 border-b border-[#5641f333]"
          >
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => item.menuItems && toggleMenu(item.id)}
            >
              <p
                className={classNames("font-500 text-lg", {
                  "text-[#605c7a]": !isActive(item.href),
                  "text-black": isActive(item.href),
                })}
              >
                {item.title}
              </p>
              {item.menuItems && item.menuItems.length > 0 ? (
                <IoIosArrowDown
                  className={`relative transition-transform duration-300 ease-in-out ${
                    openMenus[item.id] ? "rotate-180" : ""
                  }`}
                />
              ) : null}
            </div>
            <AnimatePresence>
              {item.menuItems &&
              item.menuItems.length > 0 &&
              openMenus[item.id] ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col gap-10 py-3.5"
                >
                  {item.menuItems.map((subItem, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        alt="icon"
                        className="w-[1.2rem]"
                        src={subItem.icon}
                      />
                      <p className="font-500 text-black text-sm">
                        {subItem.title}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}

        <div className="flex items-center gap-4 border-b border-[#5641f333] py-3.5">
          <p
            className={classNames("font-500 text-lg cursor-pointer", {
              "text-[#605c7a]": !isActive("#"),
              "text-black": isActive("#"),
            })}
          >
            Login
          </p>
        </div>

        <button className="my-3.5 w-fit bg-secondary text-white px-4 py-2 rounded-xl">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default MobileNavigation;
