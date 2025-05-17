"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Big vertical movement
  const yRange = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y = useSpring(yRange, { stiffness: 100, damping: 30 });

  // Scale effect zooming in/out gently
  const scaleRange = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const scale = useSpring(scaleRange, { stiffness: 100, damping: 30 });

  // Rotation effect for subtle tilt
  const rotateRange = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const rotate = useSpring(rotateRange, { stiffness: 100, damping: 30 });

  // Opacity fade
  const opacityRange = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const opacity = useSpring(opacityRange, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={ref}
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress,
            motivate your efforts, and celebrate your successes, one task at a time.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <motion.div style={{ y, scale, rotate, opacity }} className="mt-14">
            <Image src={appScreen} alt="The product screenshot" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
