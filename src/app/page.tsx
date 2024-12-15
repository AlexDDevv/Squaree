"use client";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionSquares from "./components/squares/SectionSquares";
import MarqueeSection from "./components/MarqueeSection";
import ScaleSection from "./components/ScaleSection";
import ProductivitySection from "./components/ProductivitySection";
import data from "../app/data/data.json";
import SquareTool from "./components/SquareTool";
import Testimonials from "./components/Testimonials";
import PricingPlan from "./components/PricingPlan";
import Footer from "./components/Footer";

export default function Home() {
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

    const toggleSubscription = () => {
        setMonthly(!monthly);
        setYearly(!yearly);
    };

    const toggleMonthly = () => {
        setMonthly(true);
        setYearly(false);
    };

    const toggleYearly = () => {
        setYearly(true);
        setMonthly(false);
    };

    return (
        <>
            <Header />
            <HeroSection />
            <SectionSquares />
            <MarqueeSection />
            <ScaleSection />
            <ProductivitySection />
            <section className="flex items-center justify-center gap-12 max-w-[1440px] mb-28">
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
            <section className="flex flex-col items-center justify-center gap-14 max-w-[1100px] mx-auto mb-28">
                <div className="text-center">
                    <h2 className="font-dmSans font-bold text-text text-5xl mb-5">
                        What squaree users say
                    </h2>
                    <p className="font-manrope font-semibold text-lg text-subText">
                        Here is how homely can help you
                    </p>
                </div>
                <div className="grid gridArea gap-x-5 gap-y-7 px-[100px]">
                    {data.testimonials.map((item) => (
                        <Testimonials
                            title={item.title}
                            content={item.content}
                            avatar={item.avatar}
                            name={item.name}
                            job={item.job}
                        />
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-center justify-center mb-28">
                <div className="flex items-center justify-center gap-5 mb-20">
                    <h2
                        className={`font-dmSans ${
                            monthly ? "font-bold text-5xl" : "text-xl"
                        } text-text transition-all duration-200 ease-in-out cursor-pointer`}
                        onClick={toggleMonthly}
                    >
                        Billed Monthly
                    </h2>
                    <div className="flex items-center justify-center gap-5">
                        <div
                            className="bg-bgBtn rounded-full w-20 h-11   flex items-center cursor-pointer relative"
                            onClick={toggleSubscription}
                        >
                            <div
                                className={`bg-white h-9 w-9 rounded-full absolute left-1 transition-transform duration-200 ease-in-out transform ${
                                    yearly
                                        ? "translate-x-full"
                                        : "translate-x-0"
                                }`}
                            ></div>
                        </div>
                        <p
                            className={`font-manrope ${
                                yearly ? "font-bold text-5xl" : "text-xl"
                            } text-text transition-all duration-200 ease-in-out cursor-pointer`}
                            onClick={toggleYearly}
                        >
                            Billed Yearly (save 15%)
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-center gap-10">
                    {data.pricing.map((item) => (
                        <PricingPlan
                            key={item.subscription}
                            subscription={item.subscription}
                            price={item.price}
                            priceMonth={item.priceMonth}
                            priceYear={item.priceYear}
                            perMonth={item.monthly}
                            perYear={item.yearly}
                            yearly={yearly}
                            description={item.description}
                            advantages={item.advantages}
                            CTA={item.CTA}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
