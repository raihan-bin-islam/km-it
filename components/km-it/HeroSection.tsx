import {
  AcademicCapIcon,
  ArrowDownCircleIcon,
  ChartBarIcon,
  CommandLineIcon,
  MegaphoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const HeroSection = (props: Props) => {
  const handleClickMore = () => {};
  return (
    <div className="pt-40 pb-10 max-w-7xl px-20 w-full ">
      <div className="flex justify-between gap-28">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-secondary-500 text-6xl/tight font-medium pr-10">
            Investing in Knowledge and{" "}
            <span className="text-cyan-500">Your Future</span>
          </h2>
          <p className="text-secondary-400 text-sm px-1">
            Our learning programs has been developed to be a vehicle of
            delivering multimedia learning solutions for your business
          </p>
          <div className="flex gap-12">
            <button className="px-5 py-2.5 hover:shadow-lg hover:shadow-violet-400/90 bg-gradient-to-b rounded-full from-violet-400/90 to-violet-500 text-secondary-50 transition-all">
              Contact
            </button>
            <div>
              <h4 className="text-xl text-secondary-950 font-medium">50+</h4>
              <p className="text-xs text-secondary-400">Courses</p>
            </div>
            <div>
              <h4 className="text-xl text-secondary-950 font-medium">1M+</h4>
              <p className="text-xs text-secondary-400">Our Students</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="text-lg text-slate-600 pl-1">
              Browse Top Essential Career Courses
            </h3>
            <div className="flex items-center gap-4">
              <div className="px-6 py-4 bg-gradient-to-br from-rose-300 to-rose-500 border border-rose-400 rounded-xl flex flex-col gap-2">
                <Squares2X2Icon className="size-6 text-slate-50" />
                <h2 className="text-slate-50 w-20">UI/UX Design</h2>
                <div className="w-full h-px bg-secondary-50"></div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-br from-violet-300 to-violet-500 border border-violet-400 rounded-xl flex flex-col gap-2">
                <CommandLineIcon className="size-6 text-slate-50" />
                <h2 className="text-slate-50 w-20">Web Development</h2>
                <div className="w-full h-px bg-secondary-50"></div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-br from-sky-300 to-sky-500 border border-sky-400 rounded-xl flex flex-col gap-2">
                <MegaphoneIcon className="size-6 text-slate-50" />
                <h2 className="text-slate-50 w-20">Digital Marketing</h2>
                <div className="w-full h-px bg-secondary-50"></div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-br from-amber-300 to-amber-500 border border-amber-400 rounded-xl flex flex-col gap-2">
                <AcademicCapIcon className="size-6 text-slate-50" />
                <h2 className="text-slate-50 w-20">Practical Learning</h2>
                <div className="w-full h-px bg-secondary-50"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-full p-10 rounded-full bg-gradient-to-b from-violet-600 to-60%">
            <div className="relative w-full h-full">
              <Image
                src="/hero-image.png"
                fill
                alt="hero-image"
                className="object-cover"
              />
              <div className="absolute -inset-x-12 inset-y-0 bg-gradient-to-t from-secondary-50 from-10% to-50% pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-16">
        <Link
          href="#courses"
          className="text-secondary-300"
          onClick={handleClickMore}
        >
          <ArrowDownCircleIcon className="w-10 h-10 animate-bounce" />
        </Link>
      </div>
    </div>
  );
};
