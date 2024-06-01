"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

export const Header = (props: Props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
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
  const handleHamburgerOpen = () => setOpenMenu(!openMenu);
  return (
    <header
      className={twMerge(
        " fixed z-50 left-0 -translate-y-0 lg:inset-[unset] lg:translate-y-0 lg:top-0 max-w-7xl w-full px-4 lg:px-20 py-6  bg-white/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-[unset]",
        openMenu && "inset-0"
      )}
    >
      <div
        className={twMerge(
          "z-[60] duration-300 bg-secondary-100 bg-opacity-0 border border-secondary-200 border-opacity-0 flex lg:items-center  justify-between rounded-full transition-all",
          scrollTop > scrollOffset &&
            "lg:bg-opacity-60 lg:border-opacity-40 lg:p-4 lg:pl-8 lg:backdrop-blur"
        )}
      >
        <h2
          className={twMerge(
            "text-4xl text-secondary-950 font-bold transition-all relative z-50"
          )}
        >
          KM-IT<span className="text-orange-500">.</span>
        </h2>
        <div
          className={twMerge(
            "pointer-events-auto fixed lg:relative inset-0 translate-x-full lg:translate-x-0 transition-all bg-white lg:bg-transparent lg:flex items-center lg:gap-20 gap-8 flex-col lg:flex-row lg:pt-0 pt-20 mx-auto lg:mx-0",
            openMenu && "flex translate-x-0"
          )}
        >
          <ul className="flex items-center gap-5 flex-col lg:flex-row">
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/">Home</Link>
            </li>
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/">Testimonials</Link>
            </li>
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/management">Management</Link>
            </li>
            <li className="text-secondary-500 lg:text-sm text-lg hover:text-secondary-950">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <button className="px-5 py-2.5 hover:shadow-lg hover:shadow-orange-400/90 bg-gradient-to-b rounded-full from-orange-400 to-orange-500 text-secondary-50 transition-all">
            Schoolity
          </button>
        </div>
      </div>
      <button
        className="fixed top-6 lg:right-20 right-8  group lg:hidden flex"
        onClick={handleHamburgerOpen}
      >
        <div
          className={twMerge(
            "relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-500 ring-0 ring-gray-300 hover:ring-8  ring-opacity-30 duration-200 shadow-md",
            openMenu && "ring-4"
          )}
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={twMerge(
                "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ",
                openMenu && "translate-x-10"
              )}
            ></div>
            <div
              className={twMerge(
                "bg-white h-[2px] w-7 rounded transform transition-all duration-300  delay-75",
                openMenu && "translate-x-10"
              )}
            ></div>
            <div
              className={twMerge(
                "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150",
                openMenu && "translate-x-10"
              )}
            ></div>

            <div
              className={twMerge(
                "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ",
                openMenu && "translate-x-0 w-12"
              )}
            >
              <div
                className={twMerge(
                  "absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ",
                  openMenu && "rotate-45"
                )}
              ></div>
              <div
                className={twMerge(
                  "absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ",
                  openMenu && "-rotate-45"
                )}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </header>
  );
};
