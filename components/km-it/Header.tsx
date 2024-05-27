import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

export const Header = (props: Props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollOffset = 100;

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // @ts-expect-error
      setScrollTop(e?.target?.scrollingElement?.scrollTop || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={twMerge("fixed z-50 top-0 max-w-7xl w-full px-20 py-6")}>
      <div
        className={twMerge(
          " duration-300 bg-secondary-100 bg-opacity-0 border border-secondary-200 border-opacity-0 flex items-center justify-between rounded-full transition-all",
          scrollTop > scrollOffset &&
            "bg-opacity-60 border-opacity-40 p-4 pl-8 backdrop-blur"
        )}
      >
        <h2
          className={twMerge(
            "text-4xl text-secondary-950 font-bold transition-all"
          )}
        >
          KM-IT<span className="text-orange-500">.</span>
        </h2>
        <div className="flex items-center gap-20">
          <ul className="flex items-center gap-5">
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">Home</Link>
            </li>
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">About Us</Link>
            </li>
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">Courses</Link>
            </li>
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">Testimonials</Link>
            </li>
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">Management</Link>
            </li>
            <li className="text-secondary-500 text-sm hover:text-secondary-950">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <button className="px-5 py-2.5 hover:shadow-lg hover:shadow-orange-400/90 bg-gradient-to-b rounded-full from-orange-400 to-orange-500 text-secondary-50 transition-all">
            Schoolity
          </button>
        </div>
      </div>
    </header>
  );
};
