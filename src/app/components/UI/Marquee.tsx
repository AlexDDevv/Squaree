import Image from "next/image";
import data from "../../data/data.json";

interface MarqueeProps {
    repeat?: number;
    [key: number]: [number];
}

function Marquee({ repeat = 6, ...props }: MarqueeProps) {
    return (
        <div
            {...props}
            className="flex overflow-hidden [--duration:20s] gap-[160px] max-sm:gap-24 max-mobile:gap-14"
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="flex shrink-0 items-center justify-center gap-[160px] w-full animate-marquee max-sm:gap-24 max-mobile:gap-14"
                    >
                        {data.partnersLogo.map((logo) => (
                            <div className="cursor-pointer" key={logo.brand}>
                                <Image
                                    src={logo.src}
                                    alt={`Logo de la marque ${logo.brand}`}
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
}

export default Marquee;
