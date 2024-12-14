import Image from "next/image";
import Link from "next/link";
import curve from "../../../assets/images/graphValue.svg";
import { motion } from "framer-motion";

const bounceVariants = {
    hidden: { opacity: 0, translateX: "-100px" },
    visible: {
        opacity: 1,
        translateX: "0",
        y: [20, -20, 10, 0],
        transition: {
            opacity: { delay: 2, duration: 0.5, ease: "easeInOut" },
            translateX: { delay: 1.9, duration: 0.5, ease: "easeInOut" },
            y: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.7,
            },
        },
    },
};

export default function GreenSquare() {
    return (
        <motion.div
            className="absolute top-[210px] left-[800px]"
            initial="hidden"
            animate="visible"
            exit="visible"
            variants={bounceVariants}
        >
            <div className="w-[290px] h-[290px] bg-grayGreenSquare rounded-large relative flex flex-col justify-between p-7">
                <button className="bg-bgProfil py-2 px-4 rounded-full absolute top-6 right-6 flex items-center justify-center">
                    <Link
                        href={"/"}
                        className="font-bold font-manrope text-xs uppercase text-white tracking-widest"
                    >
                        Value
                    </Link>
                </button>
                <div>
                    <h3 className="font-inter font-extrabold text-text text-[40px] leading-normal">
                        72K
                    </h3>
                </div>
                <div>
                    <Image src={curve} alt="Courbe" />
                </div>
                <div>
                    <h4 className="font-inter text-lg text-productTitle">
                        Product title
                    </h4>
                    <p className="font-inter font-medium text-sm text-squareText">
                        Short description goes here
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
