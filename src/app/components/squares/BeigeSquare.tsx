import React from 'react'
import { ChevronDown } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import compteur from "../../../assets/images/compteur.svg"

export default function BeigeSquare() {
    return (
        <div className='bg-beigeSquare h-[434px] w-[407px] rounded-large px-7 py-8 flex flex-col justify-between relative'>
            <div className='flex items-center justify-between'>
                <button className='bg-bgValue py-2 px-4 rounded-full flex items-center justify-center'>
                    <Link href={"/"} className='font-bold font-manrope text-xs uppercase text-white tracking-widest'>Value</Link>
                </button>
                <button className='bg-bgProfil py-2 px-4 rounded-full flex items-center justify-center gap-1.5'>
                    <Link href={"/"} className='font-bold font-manrope text-xs uppercase text-white tracking-widest'>Daily visits</Link>
                    <ChevronDown className='text-white h-4 w-4' />
                </button>
            </div>
            <div className='text-center'>
                <h3 className='font-inter font-semibold text-text text-4xl mb-3'>$5476</h3>
                <p className='font-inter text-sm text-text'>Spending This Week</p>
            </div>
            <div>
                <h4 className='font-inter text-lg text-text'>Work force</h4>
                <p className='font-inter font-medium text-sm text-text'>Short description goes here</p>
            </div>
            <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px]'>
                <Image
                    src={compteur}
                    alt='Compteur'
                />
            </div>
        </div>
    )
}
