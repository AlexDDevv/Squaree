import React, { useState } from "react";
import data from "../../app/data/data.json";
import PricingPlan from "../components/PricingPlan";
import { motion } from "framer-motion";

const marqueeAnimation = {
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

export default function PricingSection() {
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

    const toggleSubscription = () => {
        setMonthly(!monthly);
        setYearly(!yearly);
    };

    const toggleMonthly = () => {
        setMonthly(true);
        setYearly(false);
    };

    const toggleYearly = () => {
        setYearly(true);
        setMonthly(false);
    };

    return (
        <section className="flex flex-col items-center justify-center mb-28 px-6">
            <motion.div
                className="flex items-center justify-center gap-5 mb-20 max-sm:flex-wrap"
                initial={marqueeAnimation.initial}
                whileInView={marqueeAnimation.animate}
                exit={marqueeAnimation.exit}
                transition={marqueeAnimation.transition}
                viewport={{ once: true, amount: 0.25 }}
            >
                <h2
                    className={`font-manrope ${
                        monthly
                            ? "font-bold text-5xl max-md:text-3xl max-sm:text-2xl max-mobile:text-lg"
                            : "text-xl max-md:text-sm max-sm:text-xs"
                    } text-text transition-all duration-200 ease-in-out cursor-pointer max-sm:order-2`}
                    onClick={toggleMonthly}
                >
                    Billed Monthly
                </h2>
                <div className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center">
                    <div
                        className="bg-bgBtn rounded-full w-20 h-11 flex items-center cursor-pointer relative max-sm:w-16 max-sm:h-8 max-sm:order-1"
                        onClick={toggleSubscription}
                    >
                        <div
                            className={`bg-white h-9 w-9 left-1 rounded-full absolute transition-transform duration-200 ease-in-out transform ${
                                yearly
                                    ? "translate-x-full max-sm:translate-x-[2rem]"
                                    : "translate-x-0"
                            } max-sm:h-6 max-sm:w-6`}
                        ></div>
                    </div>
                </div>
                <h2
                    className={`font-manrope ${
                        yearly
                            ? "font-bold text-5xl max-md:text-3xl max-sm:text-2xl max-mobile:text-lg"
                            : "text-xl max-md:text-sm max-sm:text-xs"
                    } text-text transition-all duration-200 ease-in-out cursor-pointer max-sm:order-2`}
                    onClick={toggleYearly}
                >
                    Billed Yearly (save 15%)
                </h2>
            </motion.div>
            <div className="flex items-start justify-center gap-10 max-md:flex-col">
                {data.pricing.map((item) => (
                    <PricingPlan
                        key={item.subscription}
                        subscription={item.subscription}
                        price={item.price}
                        priceMonth={item.priceMonth}
                        priceYear={item.priceYear}
                        perMonth={item.monthly}
                        perYear={item.yearly}
                        yearly={yearly}
                        description={item.description}
                        advantages={item.advantages}
                        CTA={item.CTA}
                    />
                ))}
            </div>
        </section>
    );
}
