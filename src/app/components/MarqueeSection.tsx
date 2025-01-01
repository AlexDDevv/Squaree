import React from "react";
import Marquee from "./UI/Marquee";
import { motion } from "framer-motion";

const marqueeAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 1, scale: 1 },
    transition: {
        opacity: {
            duration: 0.4,
            ease: "easeInOut",
        },
        scale: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
        },
    },
};

export default function MarqueeSection() {
    return (
        <motion.section
            className="max-w-[800px] mx-auto mb-36 relative px-6"
            initial={marqueeAnimation.initial}
            whileInView={marqueeAnimation.animate}
            exit={marqueeAnimation.exit}
            transition={marqueeAnimation.transition}
            viewport={{ once: true, amount: 0.25 }}
        >
            <p className="font-dmSans font-medium text-xl text-text text-center opacity-50 mb-10 max-md:text-lg">
                We have the fast paced growing companies with us
            </p>
            <Marquee />
            <div className="z-2 w-full h-full absolute inset-0 custom-gradient"></div>
        </motion.section>
    );
}
