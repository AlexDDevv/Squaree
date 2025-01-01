import React, { useState, useEffect } from 'react'
import { X } from "lucide-react"
import { motion } from 'framer-motion'
import { SubscribeButton } from './UI/SubscribeButton'
import ShinyButton from './UI/ShinyButton'

export default function Newsletter() {
    const [isClose, setIsClose] = useState(false)
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [email, setEmail] = useState("")

    const handleNewsletter = () => {
        setIsClose(!isClose);
        if (isFirstLoad) {
            setIsFirstLoad(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        !isClose ? (
            <motion.div
                className='fixed right-6 top-40 bg-gradient-to-br from-white to-[#F1F1F1] border-2 rounded-lg p-8 text-center gap-5 ml-6 transition-all duration-200 ease-in-out hover:border-bgBtn hover:shadow-[10px_14px_110px_#FFF7E7] max-mobile:py-7'
                initial={{ opacity: 0, scale: "0.8" }}
                animate={{ opacity: 1, scale: 0 }}
                exit={{ opacity: 1, scale: 0 }}
                transition={{
                    opacity: {
                        duration: 0.5, ease: "easeInOut", delay: isFirstLoad ? 2.3 : 0
                    },
                    scale: {
                        duration: 0.5, ease: "easeInOut", delay: isFirstLoad ? 2.5 : 0
                    }
                }}
            >
                <div className='mb-4'>
                    <h4 className='font-manrope font-semibold text-cardUserText text-lg max-mobile:text-sm max-mobile:leading-normal'>Do you want to learn more about us?</h4>
                    <p className='font-manrope text-cardUserText max-mobile:text-xs'>Subscribe to our newsletter!</p>
                </div>
                <div>
                    <form className='flex flex-col gap-1 text-left mb-4'>
                        <label htmlFor="emailAddress" className='font-inter font-medium text-text text-xs'>Email address</label>
                        <input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='font-inter text-text bg-[rgb(202,202,202,0.1)] border border-border rounded-sm px-2 py-1 max-mobile:text-sm max-mobile:py-1.5'
                        />
                    </form>
                    <SubscribeButton
                        buttonColor='#F2B53C'
                        buttonTextColor='white'
                        changeText={"Subscribed"}
                        initialText={"Subscribe"}
                    />
                </div>
                <X className='absolute top-2 right-2 h-4 w-4 cursor-pointer' onClick={handleNewsletter} />
            </motion.div>
        ) : (
            <ShinyButton onClick={handleNewsletter} />
        )
    )
}
