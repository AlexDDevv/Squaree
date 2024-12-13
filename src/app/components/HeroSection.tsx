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
        <section className="max-w-[650px] mx-auto text-center mb-20 mt-60">
            <motion.h1
                className="font-dmSans font-bold text-[78px] text-text leading-[90px]"
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
                className="font-dmSans font-bold text-[78px] text-text leading-[90px] mb-6 block"
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
                className="font-manrope font-medium text-sm text-subText"
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
                flow&apos;'s simple platform that helps creators like you sell
                their digital products online.
            </motion.p>
        </section>
    );
}
