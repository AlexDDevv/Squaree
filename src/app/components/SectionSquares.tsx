import React from 'react'
import PinkSquare from './UI/PinkSquare'
import PurpleSquare from './UI/PurpleSquare'
import NotionSquare from './UI/NotionSquare'
import GreenSquare from './UI/GreenSquare'
import BeigeSquare from './UI/BeigeSquare'

export default function SectionSquares() {
    return (
        <section className='max-w-[1440px] mx-auto mb-20 relative'>
            <PinkSquare />
            <PurpleSquare />
            <NotionSquare />
            <GreenSquare />
            <BeigeSquare />
        </section>
    )
}
