import React from "react";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";

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

        <nav className = "flex gap-6 items-center">
          <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Features</a>
          <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Updates</a>
          <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Help</a>
          <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Customers</a>
          <button className="bg-white py-2 px-4 rounded-lg text-black"> Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};
