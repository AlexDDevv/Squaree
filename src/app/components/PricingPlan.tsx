import React from "react";

type PricingPlanProps = {
    subscription: string;
    price?: string;
    priceMonth?: string;
    priceYear?: string;
    perMonth?: string;
    perYear?: string;
    yearly: boolean;
    description: string;
    advantages: string[];
    CTA: string;
};

export default function PricingPlan({
    subscription,
    price,
    priceMonth,
    priceYear,
    perMonth,
    perYear,
    yearly,
    description,
    advantages,
    CTA,
}: PricingPlanProps) {
    return (
        <div className="bg-gradient-to-br from-white to-[#F1F1F1] border-2 rounded-large flex flex-col gap-8 p-7 w-[500px] transition-all duration-200 ease-in-out hover:border-bgBtn hover:shadow-[10px_14px_110px_#FFF7E7]">
            <div className="flex flex-col gap-4 pb-8 border-b border-[rgba(36,36,36,0.20)]">
                <h3 className="font-dmSans font-bold text-text text-[34px]">
                    {subscription}
                </h3>
                {priceYear ? (
                    yearly ? (
                        <div className="flex items-end gap-1">
                            <h4 className="font-dmSans font-bold text-text text-[38px] leading-none">
                                {priceYear}
                            </h4>
                            <span className="font-dmSans font-bold text-text">
                                {perYear}
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-end gap-1">
                            <h4 className="font-dmSans font-bold text-text text-[38px] leading-none">
                                {priceMonth}
                            </h4>
                            <span className="font-dmSans font-bold text-text">
                                {perMonth}
                            </span>
                        </div>
                    )
                ) : (
                    <h4 className="font-dmSans font-bold text-text text-[38px] leading-none">
                        {price}
                    </h4>
                )}
                <p className="font-manrope text-lg text-text leading-normal max-w-[420px]">
                    {description}
                </p>
            </div>
            <div>
                {subscription === "Pro" && (
                    <p className="font-inter text-lg text-allInPlan mb-4">
                        Everything in the Free plan, plus
                    </p>
                )}
                <div className="flex flex-col gap-6">
                    {advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-dotCard"></div>
                            <p className="font-manrope text-lg text-text">
                                {advantage}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                type="button"
                className="font-manrope font-semibold text-lg text-white bg-bgBtn rounded-full py-3 px-6 border-2 border-bgBtn transition-all duration-200 ease-in-out hover:bg-transparent hover:text-bgBtn hover:shadow-[5px_10px_50px_#FFF7E7]"
            >
                {CTA}
            </button>
        </div>
    );
}
