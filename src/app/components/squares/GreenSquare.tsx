import Image from 'next/image'
import Link from 'next/link'
import curve from "../../../assets/images/graphValue.svg"

export default function GreenSquare() {
    return (
        <div className='absolute top-[210px] left-[800px]'>
            <div className='w-[290px] h-[290px] bg-grayGreenSquare rounded-large relative flex flex-col justify-between p-7'>
                <button className='bg-bgProfil py-2 px-4 rounded-full absolute top-6 right-6 flex items-center justify-center'>
                    <Link href={"/"} className='font-bold font-manrope text-xs uppercase text-white tracking-widest'>Value</Link>
                </button>
                <div>
                    <h3 className='font-inter font-extrabold text-text text-[40px] leading-normal'>72K</h3>
                </div>
                <div>
                    <Image
                        src={curve}
                        alt='Courbe'
                    />
                </div>
                <div>
                    <h4 className='font-inter text-lg text-productTitle'>Product title</h4>
                    <p className='font-inter font-medium text-sm text-squareText'>Short description goes here</p>
                </div>
            </div>
        </div>
    )
}
