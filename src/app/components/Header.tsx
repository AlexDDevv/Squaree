import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logoSquaree.svg";
import Navbar from "./Navbar";
import { Search, SquareMenu } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import MobileMenu from "./UI/MobileMenu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const menuVariants: Variants = {
        closed: {
            scaleY: 0,
            transformOrigin: "top",
            opacity: 0,
            transition: {
                delay: 0.15,
            },
        },
        open: {
            scaleY: 1,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
            },
        },
    };

    return (
        <div className="w-full fixed top-0 left-0 z-50 flex justify-center items-center mt-10 px-6">
            <motion.header
                className="relative bg-transparent w-[1116px] mx-auto rounded-large flex items-center justify-between gap-5 border border-borderHeader p-5 shadow-[0_4px_22px_rgba(0,0,0,0.1)] backdrop-blur-md max-mobile:rounded-2xl"
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
                            className="transition-transform duration-200 ease-in-out hover:scale-110 max-md:h-7 max-md:w-7 max-md:max-h-7 max-md:max-w-7"
                        />
                        <p className="font-bold font-dmSans text-text max-md:hidden max-sm:block">
                            Squaree
                        </p>
                    </Link>
                </div>
                <Navbar />
                <div className="cursor-pointer max-sm:hidden">
                    <Search className="transition-transform duration-200 ease-in-out hover:scale-110" />
                </div>
                <div className="w-full h-full fixed inset-0 z-40 pointer-events-none"></div>
                <SquareMenu className="hidden relative cursor-pointer text-text max-sm:block opacity-80" onClick={handleMenu} />
                <AnimatePresence>
                    {showMenu && (
                        <motion.div
                            className="w-52 absolute top-20 right-0 bg-white border border-borderHeader rounded-2xl p-5 shadow-[0_4px_22px_rgba(0,0,0,0.1)] backdrop-blur-md z-50 sm:hidden"
                            initial="closed"
                            animate={showMenu ? "open" : "closed"}
                            exit="closed"
                            variants={menuVariants}
                            onMouseLeave={handleMenu}
                        >
                            <MobileMenu />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}
