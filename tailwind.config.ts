import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                text: "var(--text)",
                subText: "var(--subText)",
                bgBtn: "var(--bgBtn)",
                dotCard: "var(--dotCard)",
                cardUserText: "var(--cardUserText)",
                footerLink: "var(--footerLink)",
                squareText: "var(--squareText)",
                squareBorder: "var(--squareBorder)",
                avatarName: "var(--avatarName)",
                avatarJob: "var(--avatarJob)",
                bgProfil: "var(--bgProfil)",
                borderApp: "var(--borderApp)",
                bgEmptyApp: "var(--bgEmptyApp)",
                bgFollow: "var(--bgFollow)",
                textFollow: "var(--textFollow)",
                borderFollow: "var(--borderFollow)",
                borderHeader: "var(--borderHeader)",
                textFooter: "var(--textFooter)",
                productTitle: "var(--productTitle)",
                allInPlan: "var(--allInPlan)",
                bgValue: "var(--bgValue)",
                bgNotion: "var(--bgNotion)",
                bgFooter: "var(--bgFooter)",
                purpleSquare: "var(--purpleSquare)",
                grayGreenSquare: "var(--grayGreenSquare)",
                beigeSquare: "var(--beigeSquare)",
            },
            fontFamily: {
                dmSans: ["DM Sans", "sans-serif"],
                manrope: ["Manrope", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            borderRadius: {
                large: "20px",
            },
            screens: {
                mobile: "475px",
            },
        },
    },
    plugins: [],
};
export default config;
