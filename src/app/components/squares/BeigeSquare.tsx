import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import compteur from "../../../assets/images/compteur.svg";
import { motion } from "framer-motion";

const floatAnimation = {
    animate: {
        y: [0, -5, 5, 0],
        x: [0, 5, -5, 0],
        opacity: 1,
        translateX: "0",
    },
    transition: {
        opacity: { delay: 1.7, duration: 0.5, ease: "easeInOut" },
        translateX: { delay: 1.6, duration: 0.5, ease: "easeInOut" },
        x: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
        y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    },
};

export default function BeigeSquare() {
    return (
        <motion.div
            className="absolute top-[232px] right-[-140px] max-xl:relative max-xl:inset-0"
            initial={{ opacity: 0, translateX: "100px" }}
            exit={{ opacity: 1, translateX: "0" }}
            {...floatAnimation}
            whileHover={{ scale: 1.02 }}
        >
            <div className="bg-beigeSquare h-[434px] w-[407px] rounded-large px-7 py-8 flex flex-col justify-between relative">
                <div className="flex items-center justify-between">
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-bgValue">
                        <Link
                            href={"/"}
                            className="text-xs font-bold tracking-widest text-white uppercase font-manrope"
                        >
                            Value
                        </Link>
                    </button>
                    <button className="bg-bgProfil py-2 px-4 rounded-full flex items-center justify-center gap-1.5">
                        <Link
                            href={"/"}
                            className="text-xs font-bold tracking-widest text-white uppercase font-manrope"
                        >
                            Daily visits
                        </Link>
                        <ChevronDown className="w-4 h-4 text-white" />
                    </button>
                </div>
                <div className="text-center">
                    <h3 className="mb-3 text-4xl font-semibold font-inter text-text">
                        $5476
                    </h3>
                    <p className="text-sm font-inter text-text">
                        Spending This Week
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-inter text-text">Work force</h4>
                    <p className="text-sm font-medium font-inter text-text">
                        Short description goes here
                    </p>
                </div>
                <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px]">
                    <Image src={compteur} alt="Compteur" />
                </div>
            </div>
        </motion.div>
    );
}
