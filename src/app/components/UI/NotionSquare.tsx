import Image from 'next/image'
import notion from "../../../assets/images/notion.svg"

export default function NotionSquare() {
    return (
        <div className='bg-text rounded-large max-w-[366px] px-7  py-8'>
            <div className='flex items-center gap-5'>
                <div className='bg-bgNotion rounded-3xl w-[77px] h-[77px]'>
                    <Image
                        src={notion}
                        alt='Logo de la plateforme Notion'
                    />
                </div>
                <div>
                    <h3 className='font-inter font-semibold text-2xl text-white mb-2.5'>Clear roadmap</h3>
                    <p className='font-inter font-medium text-sm text-squareText'>notion.com</p>
                </div>
            </div>
        </div>
    )
}