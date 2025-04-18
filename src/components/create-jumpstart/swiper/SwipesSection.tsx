"use client";

import OscillatingSwiper from "./OscillatingSwiper";
import { swiperImages } from "@/public/images/swiperAsset";

export default function SwipesSection() {
  return (
    <section className="w-full  relative overflow-hidden">
      {/* Large screens: Container with left text column */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 max-lg:gap-y-6">
          {/* Text column - stays within container on lg+, full width below */}
          <div className="col-span-12 lg:col-span-4 relative z-[1]">
            <div className="flex flex-col items-start gap-3 mb-4">
              <h2 className="text-xl sm:text-2xl text-white leading-tight relative">
                Launch with ease using stunning, ready-to-use themes & sections
                designed for every need.
              </h2>
            </div>
          </div>

          {/* Swiper column - breaks out of container */}
          <div
            className="z-[1001] col-span-12 lg:col-span-8 lg:ml-8 relative swiper-column pointer-events-none"
            style={{ isolation: "isolate" }}
          >
            {/* This is the wrapper that extends to the edge of the screen */}
            <div className="w-[100vw] max-lg:ml-[calc(-50vw+50%)] lg:w-[calc(100%+((100vw-100%)/2))] overflow-hidden relative">
              {/* Left gradient overlay - only visible on lg and up */}
              <div className="absolute top-0 left-0 h-full w-12 z-10 bg-gradient-to-r from-black via-black/50 to-transparent lg:block hidden" />

              {/* Mobile left gradient - positioned inside the swiper wrapper */}
              <div className="absolute top-0 left-0 h-full w-12 z-10 bg-gradient-to-r from-black via-black/50 to-transparent lg:hidden" />

              <div className="relative" style={{ pointerEvents: "none" }}>
                {/* First Row */}
                <div className="mb-2">
                  <OscillatingSwiper
                    images={[
                      swiperImages.swipe1_1,
                      swiperImages.swipe1_2,
                      swiperImages.swipe1_3,
                      swiperImages.swipe1_4,
                    ]}
                    oscillationDuration={5}
                    startingDelay={0}
                  />
                </div>

                {/* Second Row */}
                <div className="mb-2">
                  <OscillatingSwiper
                    images={[
                      swiperImages.swipe2_1,
                      swiperImages.swipe2_2,
                      swiperImages.swipe2_3,
                      swiperImages.swipe2_4,
                      swiperImages.swipe2_5,
                    ]}
                    oscillationDuration={5}
                    startingDelay={2}
                  />
                </div>

                {/* Third Row */}
                <div>
                  <OscillatingSwiper
                    images={[
                      swiperImages.swipe3_1,
                      swiperImages.swipe3_2,
                      swiperImages.swipe3_3,
                      swiperImages.swipe3_4,
                      swiperImages.swipe3_5,
                      swiperImages.swipe3_6,
                    ]}
                    oscillationDuration={5}
                    startingDelay={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right gradient overlay positioned absolute to the section */}
      <div className="absolute top-0 right-0 h-full w-12 z-10 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
