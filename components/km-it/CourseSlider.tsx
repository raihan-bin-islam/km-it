"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { SwiperContainer, register } from "swiper/element/bundle";
import { courseImages } from "@app/data";
import { Swiper, SwiperSlide } from "@app/components/swiper-wrapper";
import { twMerge } from "tailwind-merge";

type Props = {};

export const CourseSlider = (props: Props) => {
  const [innerWidth, setInnerWidth] = useState(768);

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return (
    <section
      id="courses"
      className="w-full max-w-7xl lg:px-20 px-4 overflow-hidden py-20"
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
        slidesPerView={innerWidth >= 768 ? 2 : 1}
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
                  "relative z-0 w-full lg:p-10 p-5 flex flex-col gap-1 aspect-video mx-auto rounded-[inherit] overflow-hidden bg-gradient-to-b",
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
                <Icon className="lg:size-12 size-8 text-slate-50 shrink-0" />
                <h2 className="lg:text-2xl text-xl font-medium text-slate-50 lg:mt-3">
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
