import React from 'react'
import data from "../../data/data.json"
import Link from 'next/link'

export default function MobileMenu() {
    return (
        <nav>
            <ul className='flex flex-col gap-5'>
                {data.navLink.map(link => (
                    <li key={link.content} className='transition-padding duration-200 ease-in-out hover:pl-2 max-lg:text-sm'>
                        <Link href={link.link} className='font-semibold font-manrope'>{link.content}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
