import { Section } from '@/components/app'
import { faqs } from '@/data'
import React from 'react'
import FAQItem from './FAQItem'

const FAQs = () => {
    return (
        <Section className='justify-center items-center gap-10 w-full py-20'>
            <h2 className='font-krona text-3xl-krona lg:text-4xl-krona'>FAQs</h2>
            <div className='flex flex-col w-full gap-6'>
                {
                    faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default FAQs