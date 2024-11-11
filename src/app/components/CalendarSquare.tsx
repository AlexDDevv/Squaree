import React from 'react'

type CalendarSquareProps = {
    background: string,
    month: string,
    day: string,
    content: string,
    time: string
}

export default function CalendarSquare({ background, month, day, content, time }: CalendarSquareProps) {
    return (
        <div className='bg-text rounded-2xl w-full flex items-center gap-5 p-2.5'>
            <div className={`${background} rounded-2xl flex flex-col items-center justify-center w-[76px] h-[71px]`}>
                <span className='font-inter font-medium text-sm text-text opacity-50'>{month}</span>
                <p className='font-inter font-extrabold text-2xl text-text'>{day}</p>
            </div>
            <div>
                <h3 className='font-inter font-semibold text-2xl text-white mb-2.5'>{content}</h3>
                <p className='font-inter font-medium text-sm text-white/50'>{time}</p>
            </div>
        </div>
    )
}
