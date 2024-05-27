"use client";
import { useEffect, useRef, useState } from "react";
import { SwiperContainer, register } from "swiper/element/bundle";
import { SwiperProps, SwiperSlideProps } from "swiper/react";

export function Swiper(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement> & SwiperProps,
    HTMLElement
  >
) {
  const { children, ...rest } = props;
  const swiperRef = useRef<SwiperContainer>(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Register Swiper web component
    register();

    if (swiperRef.current) {
      // pass component props to parameters
      const params = {
        ...rest,
      };
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);

      // initialize swiper
      swiperRef.current.initialize();
      if (typeof rest.onSwiper === "function") {
        rest?.onSwiper(swiperRef?.current?.swiper);
      }
    }
  }, [rest]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(
  props: SwiperSlideProps & { children: React.ReactNode }
) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
