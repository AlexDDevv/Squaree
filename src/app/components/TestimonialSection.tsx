import React from "react";
import data from "../../app/data/data.json";
import Testimonials from "../components/Testimonials";

export default function TestimonialSection() {
    return (
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
    );
}
