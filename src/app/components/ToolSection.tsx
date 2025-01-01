import React from "react";
import data from "../../app/data/data.json";
import SquareTool from "../components/SquareTool";
import { motion } from "framer-motion";

const motionProps = {
    initial: { opacity: 0, translateX: "200px" },
    whileInView: { opacity: 1, translateX: 0 },
    exit: { opacity: 1, translateX: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
        opacity: {
            duration: 0.5,
            ease: "easeInOut",
        },
        translateX: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

export default function ToolSection() {
    return (
        <section className="flex items-center justify-center gap-12 max-w-[1440px] mb-28 px-6 max-lg:flex-col">
            <div className="flex items-center justify-center gap-x-10 gap-y-14 flex-wrap max-xl:w-1/2 max-lg:w-full max-lg:order-2">
                {data.squareTool.map((tool) => (
                    <SquareTool
                        key={tool.order}
                        src={tool.src}
                        name={tool.name}
                        order={tool.order}
                        width={tool.width}
                        height={tool.height}
                    />
                ))}
            </div>
            <div className="max-w-[480px] max-xl:w-1/2 max-xl:max-w-full max-lg:w-full max-lg:text-center max-lg:order-1">
                <motion.h2
                    className="font-dmSans font-bold text-text text-5xl mb-5 max-md:text-4xl max-mobile:text-2xl"
                    {...motionProps}
                    transition={{
                        ...motionProps.transition,
                        opacity: {
                            ...motionProps.transition.opacity,
                            delay: 0.1,
                        },
                        translateX: { ...motionProps.transition.translateX },
                    }}
                >
                    Seamless integration with best apps
                </motion.h2>
                <motion.p
                    className="font-manrope font-semibold text-lg text-subText max-md:text-base max-mobile:text-xs"
                    {...motionProps}
                    transition={{
                        ...motionProps.transition,
                        opacity: {
                            ...motionProps.transition.opacity,
                            delay: 0.3,
                        },
                        translateX: {
                            ...motionProps.transition.translateX,
                            delay: 0.2,
                        },
                    }}
                >
                    Whatever you use, we integrate with the best of the best
                </motion.p>
            </div>
        </section>
    );
}
