import type { Metadata } from "next";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
    title: "Squaree",
    description: "Réalisation du challenge Squaree de la plateforme dev Spikes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
