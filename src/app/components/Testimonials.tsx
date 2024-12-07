import React from "react";
import Image from "next/image";

type TestimonialsProps = {
    title: string;
    content: string;
    avatar: string;
    name: string;
    job: string;
};

export default function Testimonials({
    title,
    content,
    avatar,
    name,
    job,
}: TestimonialsProps) {
    return (
        <div className="px-8 pt-8 pb-7 border border-[rgba(62,62,62,0.15)] rounded-large bg-gradient-to-br from-white to-[#F1F1F1]">
            <h3 className="font-manrope font-bold text-2xl text-cardUserText mb-7">
                {title}
            </h3>
            <p className="font-manrope font-medium text-cardUserText mb-7">
                {content}
            </p>
            <div className="flex items-center gap-4">
                <div>
                    <Image
                        src={avatar}
                        alt="Avatar de l'utilisateur"
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <h4 className="font-manrope font-medium text-avatarName">
                        {name}
                    </h4>
                    <h5 className="font-manrope font-medium text-sm text-avatarJob opacity-70">
                        {job}
                    </h5>
                </div>
            </div>
        </div>
    );
}
