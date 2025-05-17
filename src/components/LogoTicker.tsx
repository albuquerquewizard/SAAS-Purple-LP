"use client";
import React from "react";
import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

// Inline fade effect style
const fadeStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
};

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>

        <div className="flex overflow-hidden mt-9" style={fadeStyle}>
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-16 flex-none"
          >
            {/* First set of logos */}
            {images.map(({ src, alt }, index) => (
              <div key={`first-${index}`} className="flex-none h-8 w-auto">
                <Image src={src} alt={alt} width={100} height={50} />
              </div>
            ))}
            {/* Duplicate set of logos for seamless loop */}
            {images.map(({ src, alt }, index) => (
              <div key={`second-${index}`} className="flex-none h-8 w-auto">
                <Image src={src} alt={alt} width={100} height={50} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
