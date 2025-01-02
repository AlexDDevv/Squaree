import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const variants = {
        initial: (offset: number) => ({
            opacity: 0,
            translateY: `${offset}px`,
        }),
        animate: { opacity: 1, translateY: "0" },
        exit: { opacity: 1, translateY: "0" },
    };

    return (
        <section className="max-w-[650px] mx-auto text-center mb-20 mt-60 px-6">
            <motion.h1
                className="font-dmSans font-bold text-7xl text-text leading-[90px] max-md:text-5xl max-md:leading-tight max-mobile:text-3xl"
                custom={100}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    opacity: { delay: 0.6, duration: 1, ease: "easeInOut" },
                    translateY: { delay: 0.5, duration: 1, ease: "easeInOut" },
                }}
            >
                Predictable
            </motion.h1>
            <motion.span
                className="font-dmSans font-bold text-7xl text-text leading-[90px] mb-6 block max-md:text-5xl max-md:leading-tight max-mobile:text-3xl max-md:mb-4"
                custom={150}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    opacity: { delay: 0.7, duration: 1, ease: "easeInOut" },
                    translateY: { delay: 0.6, duration: 1, ease: "easeInOut" },
                }}
            >
                growth starts here
            </motion.span>
            <motion.p
                className="font-manrope font-medium text-sm text-subText max-md:max-w-[376px] max-md:mx-auto max-mobile:text-xs max-mobile:max-w-[325px] max-mobile:leading-normal"
                custom={200}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    opacity: { delay: 0.8, duration: 1, ease: "easeInOut" },
                    translateY: { delay: 0.7, duration: 1, ease: "easeInOut" },
                }}
            >
                Squaree helps users to go from Zero to Hero with Pockets
                flow&apos;s simple platform that helps creators like you sell
                their digital products online.
            </motion.p>
        </section>
    );
}
