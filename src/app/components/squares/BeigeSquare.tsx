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
            className="absolute top-[232px] right-[-140px]"
            initial={{ opacity: 0, translateX: "100px" }}
            exit={{ opacity: 1, translateX: "0" }}
            {...floatAnimation}
            whileHover={{ scale: 1.02 }}
        >
            <div className="bg-beigeSquare h-[434px] w-[407px] rounded-large px-7 py-8 flex flex-col justify-between relative">
                <div className="flex items-center justify-between">
                    <button className="bg-bgValue py-2 px-4 rounded-full flex items-center justify-center">
                        <Link
                            href={"/"}
                            className="font-bold font-manrope text-xs uppercase text-white tracking-widest"
                        >
                            Value
                        </Link>
                    </button>
                    <button className="bg-bgProfil py-2 px-4 rounded-full flex items-center justify-center gap-1.5">
                        <Link
                            href={"/"}
                            className="font-bold font-manrope text-xs uppercase text-white tracking-widest"
                        >
                            Daily visits
                        </Link>
                        <ChevronDown className="text-white h-4 w-4" />
                    </button>
                </div>
                <div className="text-center">
                    <h3 className="font-inter font-semibold text-text text-4xl mb-3">
                        $5476
                    </h3>
                    <p className="font-inter text-sm text-text">
                        Spending This Week
                    </p>
                </div>
                <div>
                    <h4 className="font-inter text-lg text-text">Work force</h4>
                    <p className="font-inter font-medium text-sm text-text">
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
