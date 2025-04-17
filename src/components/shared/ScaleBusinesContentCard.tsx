import React from "react";
import Image from "next/image";
import { ScaleBusinessContentCardProps } from "@/constants/types";
import { IoArrowForward } from "react-icons/io5";

const ScaleBusinesContentCard: React.FC<ScaleBusinessContentCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="w-full py-12 pl-6 pr-6 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between bg-[#CDC6FB] lg:bg-[#EBE8FE] lg:rounded-[28px] min-h-[400px] lg:min-h-[500px] xl:min-h-[650px]">
      <div className="w-full flex flex-col justify-between mb-10 text-black">
        <h1 className="text-2xl xl:text-3xl font-semibold">{title}</h1>

        <div className="flex flex-col justify-between gap-2">
          <p className="w-[70%] lg:w-full text-xl lg:text-2xl font-medium">
            {description}
          </p>

          <div className="mt-5 text-primary/90 cursor-pointer font-semibold flex items-center gap-2 group relative">
            <p className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-primary/90 after:left-0 after:bottom-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              View Details
            </p>
            <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] xl:h-[650px]">
        {image && (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title || "Business scale image"}
              fill
              className="object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScaleBusinesContentCard;
