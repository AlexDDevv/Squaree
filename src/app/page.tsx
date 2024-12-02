import Header from "./components/Header";
import SectionSquares from "./components/squares/SectionSquares";
import Marquee from "./components/UI/Marquee";
import NumberGrowth from "./components/UI/NumberGrowth";
import GrowthCurve from "./components/UI/GrowthCurve";
import data from "../app/data/data.json";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import pdp from "../assets/images/userSquaree.svg";
import Link from "next/link";
import SquareTool from "./components/SquareTool";

export default function Home() {
    return (
        <>
            <Header />
            <section className="max-w-[650px] mx-auto text-center mb-20">
                <h1 className="font-dmSans font-bold text-[78px] text-text leading-[90px] mb-6">
                    Predictable growth starts here
                </h1>
                <p className="font-manrope font-medium text-sm text-subText">
                    Squaree helps users to go from Zero to Hero with Pockets
                    flow&apos;'s simple platform that helps creators like you
                    sell their digital products online.
                </p>
            </section>
            <SectionSquares />
            <section className="max-w-[800px] mx-auto mb-36 relative">
                <p className="font-dmSans font-medium text-xl text-text text-center opacity-50 mb-10">
                    We have the fast paced growing companies with us
                </p>
                <Marquee />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white"></div>
            </section>
            <section className="max-w-[856px] mx-auto mb-28">
                <div className="mb-16">
                    <h2 className="font-dmSans font-bold text-5xl text-text text-center mb-8">
                        Turn your growth in to Squaree
                    </h2>
                    <p className="font-manrope font-semibold text-lg text-subText text-center">
                        The expectation that productivity should always lead to
                        tangible results or accomplishments & notion that
                        certain types of work or activities are more valuable or
                        productive than others.
                    </p>
                </div>
                <div className="flex items-center justify-center mb-16">
                    <GrowthCurve />
                </div>
                <div className="flex items-center justify-center gap-32 mb-10">
                    {data.growthData.map((number) => (
                        <div className="flex flex-col items-center text-center gap-7">
                            <NumberGrowth
                                key={number.purcentage}
                                value={number.purcentage}
                            />
                            <p className="font-dmSans font-medium text-text opacity-50 max-w-36">
                                {number.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-bgBtn rounded-full px-6 py-3 flex items-center justify-center gap-1">
                        <a
                            href="#"
                            className="font-inter font-semibold text-white"
                        >
                            Explore our way
                        </a>
                        <ArrowRight className="text-white h-4 w-4" />
                    </button>
                </div>
            </section>
            <section className="flex items-center justify-center gap-24 max-w-[1235px] mx-auto mb-40">
                <div className="w-1/2">
                    <h2 className="font-dmSans font-bold text-text text-5xl mb-5">
                        Know your productivity by squaree
                    </h2>
                    <p className="font-manrope font-semibold text-subText text-lg">
                        The expectation that productivity should always lead to
                        tangible results or accomplishments.
                    </p>
                </div>
                <div className="w-1/2 h-[400px] relative">
                    <div className="flex flex-col gap-11 px-8 pt-8 pb-7 w-[380px] border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1]">
                        <div>
                            <Image
                                src="/logoBubble.svg"
                                width={149}
                                height={46}
                                alt="Logo de la marque Bubble"
                            />
                        </div>
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
                    </div>
                    <div className="absolute bottom-[-20px] right-0">
                        <div className="flex gap-5 px-6 py-7 w-[380px] border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1] relative">
                            <div>
                                <Image
                                    src={pdp}
                                    alt="Photo de profil de Moana John"
                                />
                            </div>
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
                                    href={"/"}
                                    className="font-bold font-manrope text-xs uppercase text-white tracking-widest"
                                >
                                    Profile
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center gap-12 max-w-[1440px]">
                <div className="flex items-center justify-center gap-x-10 gap-y-14 flex-wrap">
                    {data.squareTool.map((tool) => (
                        <SquareTool
                            key={tool.name}
                            src={tool.src}
                            name={tool.name}
                            order={tool.order}
                            width={tool.width}
                            height={tool.height}
                        />
                    ))}
                </div>
                <div className="max-w-[480px]">
                    <h2 className="font-dmSans font-bold text-text text-5xl mb-5">
                        Seamless integration with best apps
                    </h2>
                    <p className="font-manrope font-semibold text-lg text-subText">
                        What ever you use, we integrate with the best of best
                    </p>
                </div>
            </section>
        </>
    );
}
