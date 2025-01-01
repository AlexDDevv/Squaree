import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type ExploreBtnProps = {
    isHover: boolean;
    handleHover: () => void;
};

export default function ExploreBtn({ isHover, handleHover }: ExploreBtnProps) {
    return (
        <motion.button
            className={`rounded-full flex items-center justify-center gap-1 w-0 h-full transition-all duration-500 ease-in-out ${isHover ? "w-[200px] bg-bgBtn" : ""
                }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.span
                className=" left-14 font-inter font-semibold text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: isHover ? 1 : 0,
                    x: isHover ? 0 : 20,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: isHover ? 0.25 : 0,
                }}
            >
                Explore our way
            </motion.span>
            <div
                className={`bg-bgBtn rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out ${isHover ? "p-0" : "p-5"
                    }`}
                onMouseEnter={handleHover}
            >
                <ArrowRight className="text-white h-4 w-4" />
            </div>
        </motion.button>
    );
}
