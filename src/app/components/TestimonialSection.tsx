import React from "react";
import data from "../../app/data/data.json";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

const scaleAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 1, scale: 1 },
    transition: {
        opacity: {
            duration: 0.5,
            ease: "easeInOut",
        },
        scale: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
        },
    },
};

export default function TestimonialSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-14 max-w-[1100px] mx-auto mb-28">
            <motion.div
                className="text-center"
                initial={scaleAnimation.initial}
                whileInView={scaleAnimation.animate}
                exit={scaleAnimation.exit}
                transition={scaleAnimation.transition}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="font-dmSans font-bold text-text text-5xl mb-5">
                    What squaree users say
                </h2>
                <p className="font-manrope font-semibold text-lg text-subText">
                    Here is how homely can help you
                </p>
            </motion.div>
            <div className="grid gridArea gap-x-5 gap-y-7 px-[100px]">
                {data.testimonials.map((item) => (
                    <Testimonials
                        key={item.number}
                        title={item.title}
                        content={item.content}
                        avatar={item.avatar}
                        name={item.name}
                        job={item.job}
                        number={item.number}
                    />
                ))}
            </div>
        </section>
    );
}
