import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logoSquaree.svg";
import NavLink from "./NavLink";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="w-full fixed top-0 left-0 z-50 flex justify-center items-center mt-10">
            <motion.header
                className="bg-transparent w-[1116px] mx-auto rounded-large flex items-center justify-between gap-5 border border-borderHeader p-5 shadow-[0_4px_22px_rgba(0,0,0,0.1)] backdrop-blur-md"
                initial={{ opacity: 0, translateY: "-100px" }}
                animate={{ opacity: 1, translateY: "0" }}
                exit={{ opacity: 1, translateY: "0" }}
                transition={{
                    opacity: { delay: 0.2, duration: 1, ease: "easeInOut" },
                    translateY: { duration: 1, ease: "easeInOut" },
                }}
            >
                <div>
                    <Link
                        href={"/"}
                        className="flex items-center justify-center gap-3"
                    >
                        <Image
                            src={logo}
                            alt="Logo de Squaree"
                            className="transition-transform duration-200 ease-in-out hover:scale-110"
                        />
                        <p className="font-bold font-dmSans text-text">
                            Squaree
                        </p>
                    </Link>
                </div>
                <nav>
                    <NavLink />
                </nav>
                <div className="cursor-pointer">
                    <Search className="transition-transform duration-200 ease-in-out hover:scale-110" />
                </div>
                <div className="w-full h-full fixed inset-0 z-40 pointer-events-none"></div>
            </motion.header>
        </div>
    );
}
