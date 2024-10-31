"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({ navItems, className, onNavClick }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) setVisible(false);
      else direction < 0 ? setVisible(true) : setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] px-5 py-2 items-center justify-center space-x-7",
          className
        )}
      >
        {navItems.map((navItem, idx) =>
          navItem.name === "Resume" ? (
            <Link
              key={idx}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative dark:text-neutral-50 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block ">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ) : (
            <button
              key={idx}
              onClick={() => onNavClick(navItem.name)}
              className="relative dark:text-neutral-50 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block ">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
