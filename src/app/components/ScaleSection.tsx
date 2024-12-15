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
        <section className="max-w-[856px] mx-auto mb-28">
            <motion.div
                className="mb-16"
                initial={scaleAnimation.initial}
                whileInView={scaleAnimation.animate}
                exit={scaleAnimation.exit}
                transition={scaleAnimation.transition}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="font-dmSans font-bold text-5xl text-text text-center mb-8">
                    Turn your growth in to Squaree
                </h2>
                <p className="font-manrope font-semibold text-lg text-subText text-center">
                    The expectation that productivity should always lead to
                    tangible results or accomplishments & notion that certain
                    types of work or activities are more valuable or productive
                    than others.
                </p>
            </motion.div>
            <div className="flex items-center justify-center mb-16">
                <GrowthCurve />
            </div>
            <div className="flex items-center justify-center gap-32 mb-10">
                {data.growthData.map((number) => (
                    <div className="flex flex-col items-center text-center gap-7">
                        <NumberGrowth
                            key={number.purcentage}
                            value={number.purcentage}
                        />
                        <p className="font-dmSans font-medium text-text opacity-50 max-w-36">
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
