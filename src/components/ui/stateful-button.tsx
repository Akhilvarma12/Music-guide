"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion"; // ✅ use framer-motion
import { useAnimate } from "motion/react";
import type { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const [scope, animate] = useAnimate();

  const animateLoading = async () => {
    await animate(
      ".loader",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
  };

  const animateSuccess = async () => {
    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: "0px", scale: 0, display: "none" },
      { delay: 2, duration: 0.2 }
    );
  };

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    await animateLoading();
    await onClick?.(event);
    await animateSuccess();
  };

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      onClick={handleClick}
      className={cn(
        "flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-transparent px-6 py-2 text-white backdrop-blur-sm transition duration-300 hover:border-cyan-400 hover:text-cyan-300",
        className
      )}
      {...props}
    >
      <motion.div layout className="flex items-center gap-2">
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};
