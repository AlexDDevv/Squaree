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
        <section className="flex items-center justify-center gap-12 max-w-[1440px] mb-28">
            <div className="flex items-center justify-center gap-x-10 gap-y-14 flex-wrap">
                {data.squareTool.map((tool) => (
                    <SquareTool
                        key={tool.name}
                        src={tool.src}
                        name={tool.name}
                        order={tool.order}
                        width={tool.width}
                        height={tool.height}
                    />
                ))}
            </div>
            <div className="max-w-[480px]">
                <motion.h2
                    className="font-dmSans font-bold text-text text-5xl mb-5"
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
                    className="font-manrope font-semibold text-lg text-subText"
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
