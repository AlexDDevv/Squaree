import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logoSquaree.svg";

export default function Footer() {
    return (
        <footer className="bg-bgFooter flex justify-center p-24">
            <div className="flex flex-col items-start gap-6 mr-36">
                <div>
                    <Link
                        href={"/"}
                        className="flex items-center justify-center gap-3"
                    >
                        <Image src={logo} alt="Logo de Squaree" />
                        <p className="font-bold font-dmSans text-text">
                            Squaree
                        </p>
                    </Link>
                </div>
                <p className="font-manrope font-medium text-sm text-textFooter opacity-70 max-w-52">
                    What matters is productivity with fun culture
                </p>
            </div>
            <div className="flex items-start justify-center gap-40 mr-24">
                <ul className="flex flex-col gap-8">
                    <li className="font-manrope font-bold text-footerLink cursor-pointer">
                        About
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        Contact
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        Blog
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        Story
                    </li>
                </ul>
                <ul className="flex flex-col gap-8">
                    <li className="font-manrope font-bold text-footerLink cursor-pointer">
                        Company
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        Product
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        Press
                    </li>
                    <li className="font-manrope font-bold text-footerLink opacity-60 cursor-pointer">
                        More
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-bgFollow border border-borderFollow rounded-large flex items-center justify-center gap-5 px-6 py-5 h-28 shadow-[0_4px_186px_rgba(208,216,255,0.57)]">
                    <div>
                        <h2 className="font-inter font-semibold text-2xl text-textFollow mb-2">
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
                        className="bg-bgBtn font-manrope font-bold text-lg text-white rounded-xl px-6 py-3"
                    >
                        Follow
                    </button>
                </div>
            </div>
        </footer>
    );
}
