import Image from "next/image";
import calendar from "../../../assets/images/Calendar.svg";
import userCalendar from "../../../assets/images/userCalendar.svg";
import data from "../../data/data.json";
import CalendarSquare from "../squares/CalendarSquare";
import { motion } from "framer-motion";

const bounceVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        x: [0, -20, 0, 20],
        transition: {
            opacity: { delay: 2, duration: 0.5, ease: "easeInOut" },
            scale: { delay: 1.9, duration: 0.5, ease: "easeInOut" },
            x: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.7,
            },
        },
    },
};

export default function PurpleSquare() {
    return (
        <motion.div
            className="absolute top-[80px] left-[360px] max-xl:relative max-xl:inset-0"
            initial="hidden"
            animate="visible"
            exit="visible"
            variants={bounceVariants}
        >
            <div className="w-[366px] h-[384px] bg-purpleSquare rounded-large relative">
                <div className="absolute px-4 py-2 rounded-full cursor-pointer top-7 right-7 bg-bgProfil">
                    <Image src={calendar} alt="Logo d'un calendrier" />
                </div>
                <div className="px-7 pt-11 pb-3.5 flex items-center gap-6">
                    <div>
                        <Image
                            src={userCalendar}
                            alt="Personne utilisant le calendrier de Squaree"
                        />
                    </div>
                    <div>
                        <div className="mb-2.5">
                            <h2 className="text-2xl font-semibold font-inter text-text">
                                Moana
                            </h2>
                            <p className="text-2xl font-semibold font-inter text-text">
                                John
                            </p>
                        </div>
                        <p className="text-sm font-medium opacity-50 font-inter text-text">
                            5mins ago
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-squareBorder opacity-30"></div>
                <div className="pt-3.5 pb-5 px-5 flex flex-col gap-4">
                    {data.calendarData.map((item) => (
                        <CalendarSquare
                            key={item.month}
                            background={item.background}
                            month={item.month}
                            day={item.day}
                            content={item.content}
                            time={item.time}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
