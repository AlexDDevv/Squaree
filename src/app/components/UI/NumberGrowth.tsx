"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function NumberGrowth({
    value,
    direction = "up",
    delay = 0,
    decimalPlaces = 0,
}: {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number;
    decimalPlaces?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 110,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        isInView &&
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US", {
                        minimumFractionDigits: decimalPlaces,
                        maximumFractionDigits: decimalPlaces,
                    }).format(Number(latest.toFixed(decimalPlaces))) + " %";
                }
            }),
        [springValue, decimalPlaces],
    );

    return (
        <span
            className="inline-block tabular-nums tracking-wider font-dmSans font-bold text-6xl text-text"
            ref={ref}
        />
    );
}

export default (NumberGrowth)
