import React from 'react'
import PinkSquare from './PinkSquare'
import PurpleSquare from './PurpleSquare'
import NotionSquare from './NotionSquare'
import GreenSquare from './GreenSquare'
import BeigeSquare from './BeigeSquare'

export default function SectionSquares() {
    return (
        <section className='max-w-[1440px] h-[665px] mx-auto mb-20 relative max-xl:h-auto max-xl:flex max-xl:flex-wrap max-xl:items-center max-xl:justify-center max-xl:gap-20 max-xl:px-6'>
            <PinkSquare />
            <PurpleSquare />
            <NotionSquare />
            <GreenSquare />
            <BeigeSquare />
        </section>
    )
}
