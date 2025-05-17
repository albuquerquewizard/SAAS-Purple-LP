"use client";

import helixImage from "../assets/images/helix2.png"
import Image from "next/image"
import emojiStarImage from "../assets/images/emojistar.png"
import { motion } from "framer-motion"

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">

        <motion.div
          className="absolute top-6 left-[calc(100%+36px)]"
          drag
        >
          <Image 
            src={helixImage} 
            alt="helix" 
            height="200"
            width="200"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute -top-[120px] right-[calc(100%+24px)]"
          drag
        >
          <Image 
            src={emojiStarImage} 
            alt="emoji star" 
            height="200"
            width="200"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 mx-auto max-w-sm sm:flex-row">
          <input type="email" placeholder="your@email.com" 
          className="h-12 bg-white/20 rounded-lg px-5 font-medium sm:flex-1 placeholder:text-[#9CA3AF]"/>
          <button className = "bg-white text-black h-12 px-5 rounded-lg">Get access</button>
        </form>
      </div>
    </div>
  );
};
