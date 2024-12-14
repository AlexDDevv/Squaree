import Image from "next/image";
import { motion } from "framer-motion";

const animation = {
    initial: { opacity: 0, translateY: "-100px" },
    animate: { scale: [1, 1.05, 1], opacity: 1, translateY: "0px" },
    exit: { opacity: 1, translateY: "0" },
    transition: {
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        opacity: { delay: 1.9, duration: 0.5, ease: "easeInOut" },
        translateY: { delay: 1.8, duration: 0.5, ease: "easeInOut" },
    },
};

export default function NotionSquare() {
    return (
        <motion.div
            className="bg-text rounded-large max-w-[366px] px-7 py-8 absolute top-0 left-[780px]"
            {...animation}
        >
            <div className="flex items-center gap-5">
                <div className="bg-bgNotion rounded-3xl w-[77px] h-[77px] flex items-center justify-center">
                    <Image
                        src="/notion.svg"
                        width={88}
                        height={88}
                        alt="Logo de la plateforme Notion"
                    />
                </div>
                <div>
                    <h3 className="font-inter font-semibold text-2xl text-white mb-2.5">
                        Clear roadmap
                    </h3>
                    <p className="font-inter font-medium text-sm text-squareText">
                        notion.com
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
