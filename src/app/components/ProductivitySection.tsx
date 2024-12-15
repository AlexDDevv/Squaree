import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import pdp from "../../assets/images/userSquaree.svg";

const motionSettings = (delay = 0) => ({
    initial: {
        opacity: 0,
        translateX: delay === 0.2 || delay === 0.6 ? "200px" : "-200px",
    },
    whileInView: { opacity: 1, translateX: "0" },
    viewport: { once: true, amount: 0.5 },
    exit: { opacity: 1, translateX: "0" },
    transition: { duration: 0.5, delay, ease: "easeInOut" },
});

export default function ProductivitySection() {
    return (
        <section className="flex items-center justify-center gap-24 max-w-[1235px] mx-auto mb-40">
            <div className="w-1/2">
                <motion.h2
                    className="font-dmSans font-bold text-text text-5xl mb-5"
                    {...motionSettings()}
                >
                    Know your productivity by squaree
                </motion.h2>
                <motion.p
                    className="font-manrope font-semibold text-subText text-lg"
                    {...motionSettings(0.4)}
                >
                    The expectation that productivity should always lead to
                    tangible results or accomplishments.
                </motion.p>
            </div>

            <div className="w-1/2 h-[400px] relative">
                <motion.div
                    className="flex flex-col gap-11 px-8 pt-8 pb-7 w-[380px] border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1]"
                    {...motionSettings(0.2)}
                >
                    <Image
                        src="/logoBubble.svg"
                        width={149}
                        height={46}
                        alt="Logo de la marque Bubble"
                    />
                    <div className="flex items-center gap-16">
                        <div>
                            <h3 className="font-inter text-lg text-text leading-normal">
                                Employees
                            </h3>
                            <span className="font-inter font-medium text-sm text-squareText">
                                1200+
                            </span>
                        </div>
                        <div>
                            <h3 className="font-inter text-lg text-text leading-normal">
                                Growth
                            </h3>
                            <span className="font-inter font-medium text-sm text-squareText">
                                Reviewed
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-inter text-lg text-text mb-2.5">
                            Productivity by squaree
                        </h3>
                        <span className="font-dmSans font-bold text-text text-4xl">
                            70%
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-[-20px] right-0"
                    {...motionSettings(0.6)}
                >
                    <div className="flex gap-5 px-6 py-7 w-[380px] border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1] relative">
                        <Image src={pdp} alt="Photo de profil de Moana John" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="font-inter font-semibold text-text text-2xl">
                                    Moana
                                </h3>
                                <p className="font-inter font-semibold text-text text-2xl">
                                    John
                                </p>
                            </div>
                            <p className="font-inter font-medium text-sm">
                                moana_j@mail.com
                            </p>
                        </div>
                        <button className="bg-bgProfil py-2 px-4 rounded-full absolute top-8 right-6 flex items-center justify-center">
                            <Link
                                href="/"
                                className="font-bold font-manrope text-xs uppercase text-white tracking-widest"
                            >
                                Profile
                            </Link>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
