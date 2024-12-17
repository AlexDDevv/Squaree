import React, { useState } from "react";
import data from "../../app/data/data.json";
import PricingPlan from "../components/PricingPlan";

export default function PricingSection() {
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
                        className="bg-bgBtn rounded-full w-20 h-11 flex items-center cursor-pointer relative"
                        onClick={toggleSubscription}
                    >
                        <div
                            className={`bg-white h-9 w-9 rounded-full absolute left-1 transition-transform duration-200 ease-in-out transform ${
                                yearly ? "translate-x-full" : "translate-x-0"
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
    );
}
