"use client";
import images from "@/public/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Heroarea = () => {
  return (
    <div className="w-full">
      <div className="!pt-32 py-8 xs:py-12 sm:py-20 container flex flex-col gap-8 md:gap-12">
        <span
          style={{ letterSpacing: "-0.72px" }}
          className="w-fit px-6 py-2 rounded-full bg-[#ddd9fd] text-black font-semibold text-base 2xs:text-lg"
        >
          No-Code WordPress Site Builder
        </span>

        <div className="w-full flex max-md:flex-col justify-between gap-4 2xl:gap-8">
          <div
            style={{ letterSpacing: "-5px" }}
            className="w-full 2xs:w-[90%] md:w-[60%] xl:w-[70%] flex flex-col gap-2.5 font-600 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <h1 className="">Break Limits. </h1>
            <h1 className="">
              Build <span className="text-secondary font-500">Anything</span>.
            </h1>
            <h1 className="">No Code Needed. </h1>
          </div>

          <div className="w-full 2xs:w-[90%] xs:w-[80%] sm:w-[70%] md:w-[40%] xl:w-[30%] flex flex-col justify-between gap-6  md:gap-1">
            <div className="md:bg-[#ebe8fe] rounded-[1.125rem] pt-8  md:p-5 lg:p-6 flex-grow">
              <p
                style={{
                  letterSpacing: "-0.36px",
                }}
                className="text-[#605c7a] text-lg md:text-base lg:text-lg"
              >
                Droip is a no-code, drag-and-drop WordPress builder that
                simplifies website creation with powerful capabilities.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center rounded-[1.125rem] gap-2 bg-[#ebe8fe] text-secondary py-3 px-4 font-600">
                <span className="font-600 text-sm lg:text-base">
                  Watch Intro
                </span>
                <AiOutlinePlayCircle size={20} />
              </button>

              <button className="flex items-center justify-center text-base lg:text-lg gap-1.5 bg-secondary text-white py-2.5 rounded-[1.125rem]">
                <span>Get started with Droip</span>
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <motion.div
          className="my-10 2xs:my-12 sm:my-14 md:my-16 lg:my-20"
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{
            opacity: 1,
            visibility: "visible",
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "linear",
            repeat: 0,
            repeatType: "loop",
          }}
        >
          <Image
            src={images.heroImg}
            alt="hero"
            className="border-8 border-[#ddd9fd] rounded-[0.875rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Heroarea;
