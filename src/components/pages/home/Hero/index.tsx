import React from 'react'
import { Section } from '@/components/app'
import { Button } from '@/components/utility'
import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
    return (
        <Section className={['gap-16 w-full lg:min-h-screen text-neutral-50 bg-dots bg-cover bg-center bg-no-repeat items-center lg:pt-40 py-20'].join(' ')}>
            <h1 className='hidden'>Price Calc by createxp</h1>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h2 className='font-krona text-center text-2xl md:text-3xl-krona lg:text-4xl-krona'>Charge what you're worth</h2>
                <p className='text-lg text-center'>Simplify the process of determining how much to charge for a product or service.</p>
                <Button
                    variant='white'
                    text={"Get Started, it's free!"}
                    onClick={() => router.push('/app')}
                />
            </div>
            <div className='lg:w-full md:w-[90%] w-full'>
                <img src="/heroImg.png" alt="Price Calc" />
            </div>
        </Section>
    )
}

export default Hero