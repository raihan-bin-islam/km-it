"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

import { SwiperContainer, register } from "swiper/element/bundle";
import { courseImages } from "@app/data";
import { Swiper, SwiperSlide } from "@app/components/swiper-wrapper";
import { twMerge } from "tailwind-merge";

type Props = {};

export const CourseSlider = (props: Props) => {
  return (
    <section
      id="courses"
      className="w-full max-w-7xl px-20 overflow-hidden py-20"
    >
      <h2 className="text-center text-4xl font-semibold text-secondary-500">
        Our Courses
      </h2>
      <p className="mt-1 mb-10 max-w-lg mx-auto text-center text-sm text-secondary-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at
        totam officiis in odio eius ducimus consequuntur libero, deleniti
        quibusdam!
      </p>
      <Swiper
        slidesPerView={2}
        effect="coverflow"
        centeredSlides
        initialSlide={2}
      >
        {courseImages.map(
          ({ id, icon: Icon, courseTitle, courseDesc, alt, src }, index) => (
            <SwiperSlide
              key={id}
              style={{ borderRadius: "16px", overflow: "hidden" }}
            >
              <div
                className={twMerge(
                  "relative z-0 w-full p-10 flex flex-col gap-1 aspect-video mx-auto rounded-[inherit] overflow-hidden bg-gradient-to-b",
                  index === 0
                    ? "from-orange-400 to-orange-500"
                    : index === 1
                    ? "from-rose-400 to-rose-500"
                    : index === 2
                    ? "from-sky-400 to-sky-500"
                    : index === 3
                    ? "from-violet-400 to-violet-500"
                    : index === 4
                    ? "from-emerald-400 to-emerald-500"
                    : ""
                )}
              >
                <Icon className="size-12 text-slate-50" />
                <h2 className="text-2xl font-medium text-slate-50 mt-3">
                  {courseTitle}
                </h2>
                <p className="text-sm text-slate-200">{courseDesc}</p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};
