"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-1 inset-x-0 mx-auto border rounded-full shadow-lg z-[5000] px-8 py-4  bg-neutral-800 gap-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-2 text-neutral-50 hover:text-neutral-300  transition-colors duration-200"
              )}
            >
              <span>{navItem.icon}</span>
              <span className="text-sm font-medium">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
