"use client";

import { motion } from "framer-motion";
import EcosystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-white/70 text-center mt-5 text-xl">
            Enjoy customizable lists, team work tools, and smart tracking all in one place.
            Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group rounded-xl sm:flex-1"
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 z-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-sm brightness-125"></div>

              {/* Content box with actual border */}
              <div className="relative z-10 border border-white/30 rounded-xl px-5 py-10 bg-black">
                <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                  <EcosystemIcon />
                </div>
                <h3 className="mt-6 font-bold">{title}</h3>
                <p className="mt-2 text-white/70">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
