import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logoSquaree.svg";
import data from "../data/data.json"

export default function Footer() {
    return (
        <footer className="bg-bgFooter flex justify-between p-24 max-xl:p-20 max-lg:flex-col max-lg:gap-20 max-sm:py-10 max-sm:px-6">
            <div className="flex flex-col items-start gap-6">
                <div>
                    <Link
                        href={"/"}
                        className="flex items-center justify-center gap-3"
                    >
                        <Image src={logo} alt="Logo de Squaree" className="transition-transform duration-200 ease-in-out hover:scale-110" />
                        <p className="font-bold font-dmSans text-text">
                            Squaree
                        </p>
                    </Link>
                </div>
                <p className="font-manrope font-medium text-sm text-textFooter opacity-70 max-w-52">
                    What matters is productivity with fun culture
                </p>
            </div>
            <div className="flex items-start justify-center gap-40 max-xl:gap-20 max-lg:gap-40 max-lg:justify-start max-sm:gap-20">
                {data.footerLink.map((column, columnIndex) => (
                    <ul key={columnIndex} className="flex flex-col gap-8">
                        {column.map(link => (
                            <li
                                key={link.link}
                                className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-100 relative underlineAfter"
                            >
                                {link.link}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="bg-bgFollow border border-borderFollow rounded-large flex items-center justify-center gap-5 px-6 py-5 h-28 shadow-[0_4px_186px_rgba(208,216,255,0.57)] max-w-[392px] max-mobile:rounded-2xl">
                <div>
                    <h2 className="font-inter font-semibold text-2xl text-textFollow mb-2 max-mobile:text-xl">
                        Follow us on twitter
                    </h2>
                    <Link
                        href={"https://www.notion.com/fr"}
                        className="font-inter font-medium text-sm text-squareText"
                    >
                        notion.com
                    </Link>
                </div>
                <button
                    type="button"
                    className="bg-bgBtn font-manrope font-bold text-lg text-white rounded-xl px-6 py-3 addBefore relative overflow-hidden max-mobile:text-base max-mobile:px-5 max-mobile:py-2 max-mobile:rounded-lg"
                >
                    Follow
                </button>
            </div>
        </footer>
    );
}
