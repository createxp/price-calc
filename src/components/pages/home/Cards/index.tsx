import React from 'react'
import { Section } from '@/components/app'
import { cards } from '@/data'

const Cards = () => {
    return (
        <Section className='justify-center items-center py-20'>
            <h2 className='font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona'>Pricing made easy</h2>
            <div className="flex flex-col lg:flex-row gap-12 mt-16 justify-center">
                {
                    cards.map((card, index) => (
                        <div className="border-2 border-black rounded-lg py-10 px-5 shadow-4xl relative w-full" key={index}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full border-2 border-black">
                                {card.icon}
                                {/* <Button icon={icon} /> */}
                                {/* <MdQrCodeScanner className="bg-white" size={24} /> */}
                            </div>
                            <p className="text-center">{card.content}</p>
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}

export default Cards