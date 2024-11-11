"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GrowthCurve() {
    return (
        <svg
            width="462"
            height="219"
            viewBox="0 0 462 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow"
        >
            <motion.path
                d="M55.2363 87.2713L59.4193 93.1128C63.6267 98.7358 72.1149 110.746 80.4319 119.317C88.7733 128.216 97.0658 133.675 105.627 122.211C113.944 110.746 122.261 81.2662 130.823 81.4299C139.115 81.2662 147.457 110.746 155.774 119.317C164.262 128.216 172.652 116.205 180.969 122.211C189.433 128.216 197.848 151.145 206.165 142.574C214.58 133.675 223.044 93.2765 231.361 96.0062C239.751 98.7358 248.239 120.042 256.556 143.135C264.898 166.446 273.19 166.446 281.752 151.87C291.231 137.917 295.86 132.46 306.053 124.775C316.807 117.723 323.581 128.216 331.898 116.369C340.386 104.741 348.777 69.8017 357.094 63.9603C365.557 58.3372 373.972 81.2661 382.289 84.3779C390.704 87.2713 399.168 69.8017 403.326 61.0669L407.485 52.332"
                stroke="#F2B53C"
                strokeWidth="2.8403"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
            />
            {[
                { cx: "130.025", cy: "80.8944", delay: 0.30 },
                { cx: "231.443", cy: "95.3827", delay: 0.50 },
                { cx: "359.123", cy: "62.7839", delay: 0.85 },
                { cx: "178.017", cy: "120.737", delay: 0.40 },
                { cx: "307.508", cy: "123.454", delay: 0.70 },
            ].map((ellipse, index) => (
                <motion.ellipse
                    key={index}
                    cx={ellipse.cx}
                    cy={ellipse.cy}
                    rx="5.06232"
                    ry="5.01832"
                    fill="white"
                    stroke="#F2B53C"
                    strokeWidth="2.13023"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        delay: ellipse.delay * 4,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                    }}
                />
            ))}
        </svg>
    );
}
