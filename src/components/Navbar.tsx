"use client";

import React from "react";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4 ">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgba(252,214,255,0.7),rgba(41,216,255,0.7),rgba(255,253,128,0.7),rgba(248,154,191,0.7),rgba(252,214,255,0.7))] blur-md"></div>
          <Image src={logoImage} alt="SAAS logo" className="w-12 h-12 relative" /> 
        </div>
        
        <div className="border border-white border-opacity-30 rounded-lg items-center justify-center inline-flex h-10 w-10 sm:hidden">
          <MenuIcon className="text-white " /> 
        </div>

        <nav className="hidden sm:flex gap-6 items-center">
  {["About", "Features", "Updates", "Help", "Customers"].map((text) => (
    <motion.a
      key={text}
      href="#"
      className="text-white text-opacity-60 cursor-pointer"
      initial={{ opacity: 0.6 }}
      whileHover={{
        opacity: 1,
        scale: 1.1,
        textShadow: "0 0 8px rgba(164, 110, 219, 0.8)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  ))}
  <button className="bg-white py-2 px-4 rounded-lg text-black"> Get for free</button>
</nav>

      </div>
    </div>
    </div>
  );
};
