import Image from "next/image";
import classNames from "classnames";
import React from "react";
import { cn } from "@/lib/utils";
import { CardContentProps } from "@/constants/types";

const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  icon,
  titleStyle,
  descriptionStyle,
  iconStyle,
  containerStyle,
  textContainerStyle,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-end justify-center bg-[#FFFFFF] rounded-[18px]",
        className
      )}
    >
      <div
        className={classNames(
          "flex flex-col gap-10 p-7 w-full",
          containerStyle
        )}
      >
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            quality={100}
            className={classNames("w-6", iconStyle)}
          />
        )}

        <div className={classNames("flex flex-col gap-3", textContainerStyle)}>
          {React.isValidElement(title) ? (
            title
          ) : (
            <h2
              style={{
                letterSpacing: "-1px",
                lineHeight: "28px",
              }}
              className={classNames("font-600 text-2xl", titleStyle)}
            >
              {title}
            </h2>
          )}

          <p
            className={classNames(
              "text-black text-base font-400",
              descriptionStyle
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
