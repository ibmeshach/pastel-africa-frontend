"use client";

import React from "react";
import CardContent from "./shared/CardContent";
import icons from "@/public/icons";

const Dependencies = () => {
  const { control, dollar, secure, workflow } = icons.dependencies;
  return (
    <div className="w-full">
      <div className="container w-full flex flex-col gap-20 py-8 xs:py-12 sm:py-20">
        <h2
          style={{
            letterSpacing: "-3.2px",
            lineHeight: "1.1em",
          }}
          className="text-[2.55rem] 2xs:text-[2.7rem] xs:text-[3rem] lg:text-[4rem] font-500"
        >
          Low <br />
          third-party <br />
          dependencies
        </h2>

        <div className="hidden lg:grid grid-cols-3 gap-0.5">
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <div className="col-span-2 bg-[#FFFFFF] p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
        </div>

        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-0.5">
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <div className="col-span-2 bg-[#FFFFFF] p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            iconStyle="w-7 h-7"
            className="p-5"
            descriptionStyle="text-base"
          />
        </div>

        <div className="sm:hidden flex flex-col gap-0.5">
          <div className="col-span-2 bg-[#FFFFFF] p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            iconStyle="w-7 h-7"
            className="p-6"
            descriptionStyle="text-base"
          />

          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            iconStyle="w-7 h-7"
            className="p-6"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            className="p-5"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            className="p-5"
            descriptionStyle="text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Dependencies;
