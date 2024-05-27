import { Swiper, SwiperSlide } from "@app/components/swiper-wrapper";
import React, { ReactNode, useEffect, useRef } from "react";
import { SwiperContainer, register } from "swiper/element";

type Props = {};

export const Testimonial = (props: Props) => {
  const swiperRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    if (swiperRef.current) {
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);

      // initialize swiper
      swiperRef.current.initialize();
    }
  }, []);
  return (
    <div className="max-w-7xl px-20 w-full py-10">
      <div className="flex flex-col">
        <h2 className="text-4xl font-semibold underline text-center mb-10">
          Testimonials
        </h2>

        <Swiper slidesPerView={1} centeredSlides autoplay loop>
          <SwiperSlide
            style={{
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div className="w-fit p-2 aspect-video mx-auto rounded-[inherit] overflow-hidden">
              <Quote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ad, iusto quibusdam voluptates corporis recusandae cumque
                laudantium nisi, quos dolores perspiciatis eius adipisci, vel
                placeat iste aut natus asperiores dicta soluta provident sit
                nostrum alias maiores qui? Dolor, eum eligendi.
              </Quote>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "300px !important",

              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div className="w-fit p-2 aspect-video mx-auto rounded-[inherit] overflow-hidden">
              <Quote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ad, iusto quibusdam voluptates corporis recusandae cumque
                laudantium nisi, quos dolores perspiciatis eius adipisci, vel
                placeat iste aut natus asperiores dicta soluta provident sit
                nostrum alias maiores qui? Dolor, eum eligendi.
              </Quote>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div className="w-fit p-2 aspect-video mx-auto rounded-[inherit] overflow-hidden">
              <Quote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ad, iusto quibusdam voluptates corporis recusandae cumque
                laudantium nisi, quos dolores perspiciatis eius adipisci, vel
                placeat iste aut natus asperiores dicta soluta provident sit
                nostrum alias maiores qui? Dolor, eum eligendi.
              </Quote>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div className="w-fit p-2 aspect-video mx-auto rounded-[inherit] overflow-hidden">
              <Quote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ad, iusto quibusdam voluptates corporis recusandae cumque
                laudantium nisi, quos dolores perspiciatis eius adipisci, vel
                placeat iste aut natus asperiores dicta soluta provident sit
                nostrum alias maiores qui? Dolor, eum eligendi.
              </Quote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <blockquote className="max-w-md w-fit text-sm text-center text-slate-600">
        <span className="text-3xl pr-2  text-slate-700">&#128630;</span>
        {children}
        <span className="align-text-top  text-3xl pl-2 text-slate-700">
          &#128631;
        </span>
      </blockquote>
      <p className="text-center text-secondary-400 text-xs">- Sam Altmen</p>
    </>
  );
};
