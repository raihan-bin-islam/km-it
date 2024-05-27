import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="h-96 tablet:h-max bg-gradient-to-b from-orange-300 to-orange-500 text-secondary-900 w-full">
      <div className="max-w-7xl mx-auto px-20 py-4 flex flex-col h-full tablet:px-5">
        <div className="grid grid-cols-3 relative py-20 tablet:grid-cols-1 tablet:py-0">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl tablet:text-lg mb-2">Explore Us</h2>
              <ul>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Events</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Parent Club</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">LMS</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl tablet:text-lg mb-2">Quick Links</h2>
              <ul>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Courses</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Management</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Testimonials</a>
                </li>
                <li className="text-base tablet:text-sm font-light">
                  <a href="">Scoolity</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="justify-self-end tablet:justify-self-start col-span-2 tablet:my-6">
            <h2 className="text-3xl tablet:text-2xl  mb-2">{`Let's Keep In Touch`}</h2>
            <p className="max-w-80 text-sm tablet:text-xs ">
              Katakhali, Dhaka Division, Bangladesh
            </p>
            <ul className="flex items-center gap-2 mt-6 tablet:mx-auto tablet:w-fit">
              <li>
                <a
                  href="https://www.facebook.com/people/Kanija-Mahbub-It-Centre/100076600590292/"
                  target="_blank"
                  className="font-light"
                >
                  <Image
                    src="/facebook-circle.svg"
                    width={24}
                    height={24}
                    alt="facebook-logo"
                    // style={{ filter: "invert(100%)" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kanijamahbubitcentre@gmail.com
"
                  className="font-light"
                >
                  <EnvelopeIcon className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="tel:" className="font-light">
                  <PhoneIcon className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-secondary-700 h-[1px] w-full"></div>
        </div>
        <div className="flex items-center justify-center grow">
          <h2 className="text-center mt-4 tablet:mt-2 tablet:text-sm">
            Copyright © 2023 Kanija Mahbub It Center. All Rights Reserved
          </h2>
        </div>
      </div>
    </footer>
  );
};
