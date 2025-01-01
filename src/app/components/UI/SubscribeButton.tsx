"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

interface SubscribeButtonProps {
    buttonColor: string;
    buttonTextColor?: string;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
}

const MotionCheckIcon = motion(CheckIcon)

export const SubscribeButton: React.FC<
    SubscribeButtonProps
> = ({
    buttonColor,
    buttonTextColor,
    changeText,
    initialText,
}) => {
        const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

        return (
            <AnimatePresence mode="wait">
                {isSubscribed ? (
                    <motion.button
                        className="group relative flex gap-2 h-10 w-[150px] mx-auto items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-[#F2B53C] addBefore"
                        onClick={() => setIsSubscribed(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        type="submit"
                    >
                        <motion.span
                            key="action"
                            className="relative font-semibold"
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            style={{ color: buttonColor }}
                        >
                            {changeText}
                        </motion.span>
                        <MotionCheckIcon
                            className="size-4 text-[#F2B53C]"
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                        />
                    </motion.button>
                ) : (
                    <motion.button
                        className="group relative flex h-10 w-[150px] mx-auto cursor-pointer items-center justify-center rounded-md border-none addBefore overflow-hidden"
                        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                        onClick={() => setIsSubscribed(true)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.span
                            key="reaction"
                            className="relative flex items-center justify-center font-semibold"
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                        >
                            {initialText}
                        </motion.span>
                        <ChevronRightIcon
                            className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        );
    };
