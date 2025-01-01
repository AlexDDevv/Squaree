"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionSquares from "./components/squares/SectionSquares";
import MarqueeSection from "./components/MarqueeSection";
import ScaleSection from "./components/ScaleSection";
import ProductivitySection from "./components/ProductivitySection";
import ToolSection from "./components/ToolSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <SectionSquares />
            <MarqueeSection />
            <ScaleSection />
            <ProductivitySection />
            <ToolSection />
            <TestimonialSection />
            <PricingSection />
            <Footer />
            <Newsletter />
        </>
    );
}
