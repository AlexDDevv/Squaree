import React from "react";
import Image from "next/image";
import clsx from "clsx";

type SquareToolProps = {
    src?: string;
    name?: string;
    order: number;
    width?: number;
    height?: number;
};

export default function SquareTool({
    src,
    name,
    order,
    width,
    height,
}: SquareToolProps) {
    const orderClasses: { [key: number]: string } = {
        1: "order-1",
        2: "order-2",
        3: "order-3",
        4: "order-4",
        5: "order-5",
        6: "order-6",
        7: "order-7",
        8: "order-8",
        9: "order-9",
        10: "order-10",
        11: "order-11",
        12: "order-12",
    };

    return (
        <div
            className={clsx(
                src ? "bg-white" : "bg-bgEmptyApp opacity-10",
                orderClasses[order] || "",
                "w-[120px] h-[120px] rounded-[28px] border-2",
                src ? "border-[rgb(62,62,62,0.1)]" : "border-borderApp",
                "flex items-center justify-center"
            )}
        >
            {src && (
                <Image
                    src={src}
                    alt={`Logo de l'outil ${name}`}
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}
