import React from "react";
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

type PricingPlanProps = {
    subscription: string;
    price?: string;
    priceMonth?: string;
    priceYear?: string;
    perMonth?: string;
    perYear?: string;
    yearly: boolean;
    description: string;
    advantages: string[];
    CTA: string;
};

export default function PricingPlan({
    subscription,
    price,
    priceMonth,
    priceYear,
    perMonth,
    perYear,
    yearly,
    description,
    advantages,
    CTA,
}: PricingPlanProps) {
    return (
        <motion.div
            className="bg-gradient-to-br from-white to-[#F1F1F1] border-2 rounded-large flex flex-col gap-8 p-7 w-1/2 transition-all duration-200 ease-in-out hover:border-bgBtn hover:shadow-[10px_14px_110px_#FFF7E7] max-md:w-full"
            initial={marqueeAnimation.initial}
            whileInView={marqueeAnimation.animate}
            exit={marqueeAnimation.exit}
            transition={marqueeAnimation.transition}
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className="flex flex-col gap-4 pb-8 border-b border-[rgba(36,36,36,0.20)]">
                <h3 className="font-dmSans font-bold text-text text-[34px]">
                    {subscription}
                </h3>
                {priceYear ? (
                    <motion.div className="flex items-end gap-1"
                        key={yearly.toString()}
                        initial={{ opacity: 0, translateY: "15px" }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "15px" }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}>
                        <h4 className="font-dmSans font-bold text-text text-[38px] leading-none">
                            {yearly ? priceYear : priceMonth}
                        </h4>
                        <span className="font-dmSans font-bold text-text">
                            {yearly ? perYear : perMonth}
                        </span>
                    </motion.div>
                ) : (
                    <h4 className="font-dmSans font-bold text-text text-[38px] leading-none">
                        {price}
                    </h4>
                )}
                <p className="font-manrope text-lg text-text leading-normal max-w-[420px] max-mobile:text-base">
                    {description}
                </p>
            </div>
            <div>
                {subscription === "Pro" && (
                    <p className="font-inter text-lg text-allInPlan mb-4 max-mobile:text-base">
                        Everything in the Free plan, plus
                    </p>
                )}
                <div className="flex flex-col gap-6">
                    {advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-dotCard"></div>
                            <p className="font-manrope text-lg text-text max-mobile:text-base">
                                {advantage}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                type="button"
                className="font-manrope font-semibold text-lg text-white bg-bgBtn rounded-full py-3 px-6 addAfter relative overflow-hidden"
            >
                {CTA}
            </button>
        </motion.div>
    );
}
