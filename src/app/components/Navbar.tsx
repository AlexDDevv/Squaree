import React from 'react'
import data from "../data/data.json"
import Link from 'next/link'
import { ChevronDown } from "lucide-react"

export default function Navbar() {
    return (
        <nav className='max-sm:hidden'>
            <ul className='flex items-center gap-10 max-lg:gap-5'>
                {data.navLink.map(link => (
                    <li key={link.content} className='flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-110 max-lg:text-sm max-md:gap-1'>
                        <Link href={link.link} className='font-semibold font-manrope'>{link.content}</Link>
                        <ChevronDown className='h-4 w-4 cursor-pointer' />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
