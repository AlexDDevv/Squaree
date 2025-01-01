"use client";

import React from "react";
import {
    motion,
    type AnimationProps,
    type HTMLMotionProps,
} from "framer-motion";
import { Mail } from "lucide-react"

const animationProps = {
    initial: { "--x": "100%", scale: 0.8 },
    animate: { "--x": "-100%", scale: 1 },
    whileTap: { scale: 0.95 },
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring",
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
} as AnimationProps;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
    onClick: () => void;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
    ({ onClick, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                {...animationProps}
                {...props}
                className="fixed right-6 top-40 rounded-lg border border-[rgba(36,36,36,0.20)] px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow"
                onClick={onClick}
            >
                <span
                    className="relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light"
                    style={{
                        maskImage:
                            "linear-gradient(-75deg,#F2B53C calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#F2B53C calc(var(--x) + 100%))",
                    }}
                >
                    <Mail className="text-squareBorder" />
                </span>
                <span
                    style={{
                        mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                        maskComposite: "exclude",
                    }}
                    className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,#F2B53C/10%_calc(var(--x)+20%),#F2B53C/50%_calc(var(--x)+25%),#F2B53C/10%_calc(var(--x)+100%))] p-px"
                ></span>
            </motion.button>
        );
    },
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
