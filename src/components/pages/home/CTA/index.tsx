import { Section } from '@/components/app'
import { Button } from '@/components/utility'
import { useRouter } from 'next/router'
import React from 'react'

const CTA = () => {
    const router = useRouter()
    return (
        <Section className='justify-center items-center gap-10 w-full bg-dots-full bg-center bg-cover bg-no-repeat text-neutral-50 py-20'>
            <h2 className='font-krona text-center text-xl md:text-2xl lg:text-3xl-krona'>Stop Underestimating Your Work,<br />Start Getting Paid What You Deserve.</h2>
            <Button
                variant='white'
                text={"Get Started, it's free!"}
                onClick={() => router.push('/app')}
            />
            <div className='flex flex-col justify-center items-center'>
                a project by
                <a href="https://createxp.in/" target="_blank" rel="noreferrer" className="text-neutral-50 underline">
                    <img src="/logo.png" alt="createxp" width={'128px'} />
                </a>
            </div>
        </Section>
    )
}

export default CTA