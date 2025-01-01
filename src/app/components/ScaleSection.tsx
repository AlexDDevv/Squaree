import React, { useState } from "react";
import data from "../data/data.json";
import NumberGrowth from "../components/UI/NumberGrowth";
import GrowthCurve from "../components/UI/GrowthCurve";
import ExploreBtn from "./UI/ExploreBtn";
import { motion } from "framer-motion";

const scaleAnimation = {
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

export default function ScaleSection() {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    };

    return (
        <section className="max-w-[856px] mx-auto mb-28 px-6">
            <motion.div
                className="mb-16 max-mobile:mb-12"
                initial={scaleAnimation.initial}
                whileInView={scaleAnimation.animate}
                exit={scaleAnimation.exit}
                transition={scaleAnimation.transition}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="font-dmSans font-bold text-5xl text-text text-center mb-8 max-md:text-4xl max-md:leading-tight max-mobile:text-2xl max-mobile:mb-6">
                    Turn your growth in to Squaree
                </h2>
                <p className="font-manrope font-semibold text-lg text-subText text-center max-md:text-base max-mobile:text-xs max-mobile:leading-normal">
                    The expectation that productivity should always lead to
                    tangible results or accomplishments & notion that certain
                    types of work or activities are more valuable or productive
                    than others.
                </p>
            </motion.div>
            <div className="flex items-center justify-center mb-16 max-mobile:mb-12">
                <GrowthCurve />
            </div>
            <div className="flex items-center justify-between gap-5 mb-10 max-mobile:flex-col max-mobile:justify-center">
                {data.growthData.map((number) => (
                    <div key={number.purcentage} className="flex flex-col items-center text-center gap-7 max-sm:gap-4 max-mobile:gap-3">
                        <NumberGrowth
                            key={number.purcentage}
                            value={number.purcentage}
                        />
                        <p className="font-dmSans font-medium text-text opacity-50 max-w-36 max-sm:text-xs">
                            {number.content}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center h-14">
                <ExploreBtn isHover={isHover} handleHover={handleHover} />
            </div>
        </section>
    );
}
