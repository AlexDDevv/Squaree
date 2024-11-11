import Image from "next/image";
import data from "../../data/data.json"

interface MarqueeProps {
    pauseOnHover?: boolean;
    repeat?: number;
    [key: string]: any;
}

function Marquee({ pauseOnHover = true, repeat = 6, ...props }: MarqueeProps) {
    return (
        <div
            {...props}
            className="group flex overflow-hidden [--duration:20s] gap-[160px]"
        >
            {Array(repeat).fill(0).map((_, i) => (
                <div
                    key={i}
                    className={`flex shrink-0 items-center justify-center gap-[160px] w-full animate-marquee ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
                >
                    {data.partnersLogo.map(logo => (
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

export default (Marquee)
