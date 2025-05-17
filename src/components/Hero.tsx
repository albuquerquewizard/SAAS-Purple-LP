"use client";
// Importing required image and SVG assets
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Hero component for the top section of the landing page
export const Hero = () => {
  return (
    // Section with gradient background and padding
    <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      {/* Decorative radial background shape for depth */}
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      {/* Container for centering content */}
      <div className="container relative">
        {/* Notification banner with version info and link */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon /> {/* Inline arrow icon */}
            </span>
          </a>
        </div>

        {/* Hero heading with optional image overlays */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl mt-8 inline-flex font-bold tracking-tighter text-center">
              One Task
              <br /> at a Time
            </h1>

            {/* Decorative images shown only on larger screens */}
            <motion.div
              className="absolute right-[476px] top-[128px] hidden sm:inline"
              drag
              // dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                height="200"
                width="200"
                className="max-w-none"
                alt="cursor"
                draggable="false"
              />
            </motion.div>

            <motion.div
              className="absolute left-[496px] top-[88px] hidden sm:inline"
              drag
              // dragSnapToOrigin
            >
              <Image
                src={messageImage}
                height="200"
                width="200"
                className="max-w-none"
                alt="cursor"
                draggable="false"
              />
            </motion.div>

            {/* <Image
              src={messageImage}
              height="200"
              width="200"
              className=""
              alt="message"
            /> */}
          </div>
        </div>

        {/* Supporting description text */}
        <div className="flex justify-center">
          <p className="text-center text-white mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        {/* Call-to-action button */}
        <div className="flex mt-8 justify-center">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
