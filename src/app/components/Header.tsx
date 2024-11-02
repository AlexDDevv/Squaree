import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../assets/images/logoSquaree.svg"
import NavLink from './NavLink'
import { Search } from "lucide-react"

export default function Header() {
    return (
        <header className='max-w-[1116px] mx-auto rounded-[20px] flex items-center justify-between gap-5 border border-borderHeader p-5 mt-10 mb-28 shadow-[0_4px_22px_rgba(0,0,0,0.1)]'>
            <div>
                <Link href={"/"} className='flex items-center justify-center gap-3'>
                    <Image
                        src={logo}
                        alt='Logo de Squaree'
                    />
                    <p className='font-bold font-dmSans text-text'>Squaree</p>
                </Link>
            </div>
            <nav>
                <NavLink />
            </nav>
            <div className='cursor-pointer'>
                <Search />
            </div>
        </header>
    )
}
