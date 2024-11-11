import Image from 'next/image'
import Link from 'next/link'
import pinkSquare from "../../../assets/images/pinkSquare.svg"

export default function PinkSquare() {
    return (
        <div className='max-w-[290px] relative'>
            <Image
                src={pinkSquare}
                alt='Image de fond pour accéder au profil'
            />
            <button className='bg-bgProfil py-2 px-4 rounded-full absolute top-6 left-6 flex items-center justify-center'>
                <Link href={"/"} className='font-bold font-manrope text-xs uppercase text-white tracking-widest'>Profile</Link>
            </button>
        </div>
    )
}
