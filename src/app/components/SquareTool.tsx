import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

type SquareToolProps = {
    src?: string;
    name?: string;
    order: number;
    width?: number;
    height?: number;
};

const MotionImage = motion(Image);

export default function SquareTool({
    src,
    name,
    order,
    width,
    height,
}: SquareToolProps) {
    const orderClasses: { [key: number]: string } = {
        1: "order-1",
        2: "order-2",
        3: "order-3",
        4: "order-4",
        5: "order-5",
        6: "order-6",
        7: "order-7",
        8: "order-8",
        9: "order-9",
        10: "order-10",
        11: "order-11",
        12: "order-12",
    };

    const [isHovered, setIsHovered] = useState(false);

    const scaleAnimation = {
        initial: { opacity: 1, scale: 1 },
        animate: {
            scale: isHovered ? [1, 1.15, 1] : 1,
        },
        transition: {
            scale: {
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
            },
            opacity: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const appearAnimation = {
        initial: { opacity: 0 },
        whileInView: (custom: number) => ({
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: custom * 0.15,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <motion.div
            className={clsx(
                src
                    ? "bg-white border-[rgba(62,62,62,0.15)] transition-colors duration-200 ease-in-out hover:border-[rgba(62,62,62,0.5)]"
                    : "bg-[rgb(202,202,202,0.1)] border-[rgba(62,62,62,0.1)]",
                orderClasses[order] || "",
                "flex items-center justify-center w-[120px] h-[120px] rounded-[28px] border-2 max-sm:h-24 max-sm:w-24 max-sm:rounded-large",
                !src ? "max-xl:hidden" : ""
            )}
            custom={order}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.25 }}
            variants={appearAnimation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {src && (
                <MotionImage
                    src={src}
                    alt={`Logo de l'outil ${name}`}
                    width={width}
                    height={height}
                    initial={scaleAnimation.initial}
                    animate={scaleAnimation.animate}
                    transition={scaleAnimation.transition}
                    className="max-sm:max-w-10 max-sm:max-h-10"
                />
            )}
        </motion.div>
    );
}
