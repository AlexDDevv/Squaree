import Image from "next/image";
import Link from "next/link";
import pinkSquare from "../../../assets/images/pinkSquare.svg";
import { motion } from "framer-motion";

const cardWaveVariants = {
    hidden: { opacity: 0, translateX: "-100px" },
    visible: {
        opacity: 1,
        translateX: "0",
        rotate: [0, 5, -5, 0],
        transition: {
            opacity: {
                delay: 1.6,
                duration: 0.5,
                ease: "easeInOut",
            },
            translateX: {
                delay: 1.5,
                duration: 0.5,
                ease: "easeInOut",
            },
            rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    },
};

export default function PinkSquare() {
    return (
        <motion.div
            className="absolute left-0 top-[30px] max-xl:relative max-xl:inset-0 max-xl:h-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cardWaveVariants}
            transition={{
                opacity: { delay: 1.6, duration: 0.5, ease: "easeInOut" },
                translateX: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
            }}
        >
            <div className="max-w-[290px] relative">
                <Image
                    src={pinkSquare}
                    alt="Image de fond pour accéder au profil"
                />
                <button className="absolute flex items-center justify-center px-4 py-2 rounded-full bg-bgProfil top-6 left-6">
                    <Link
                        href={"/"}
                        className="text-xs font-bold tracking-widest text-white uppercase font-manrope"
                    >
                        Profile
                    </Link>
                </button>
            </div>
        </motion.div>
    );
}
