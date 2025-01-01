import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialsProps = {
    title: string;
    content: string;
    avatar: string;
    name: string;
    job: string;
    number: number;
};

export default function Testimonials({
    title,
    content,
    avatar,
    name,
    job,
    number,
}: TestimonialsProps) {
    const appearAnimation = {
        initial: {
            opacity: 0,
            translateX: number <= 2 ? "-100px" : "100px",
        },
        whileInView: (custom: number) => ({
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 0.5,
                delay: custom * 0.25,
                ease: "easeInOut",
            },
        }),
        exit: { opacity: 1, translateX: 0 },
    };

    return (
        <motion.div
            className="px-8 pt-8 pb-7 border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1] max-lg:px-6 max-lg:pt-6 max-lg:pb-5"
            custom={number}
            initial={"initial"}
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.25 }}
            variants={appearAnimation}
            exit="exit"
        >
            <h3 className="font-manrope font-bold text-2xl text-cardUserText mb-7 max-lg:text-xl">
                {title}
            </h3>
            <p className="font-manrope font-medium text-cardUserText mb-7 max-lg:text-sm">
                {content}
            </p>
            <div className="flex items-center gap-4">
                <div>
                    <Image
                        src={avatar}
                        alt="Avatar de l'utilisateur"
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <h4 className="font-manrope font-medium text-avatarName max-lg:text-sm">
                        {name}
                    </h4>
                    <h5 className="font-manrope font-medium text-sm text-avatarJob opacity-70 max-lg:text-xs">
                        {job}
                    </h5>
                </div>
            </div>
        </motion.div>
    );
}
