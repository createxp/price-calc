import React from 'react'
import { Navbar, Section } from '@/components/app'
import { NextPage } from 'next'
import { Button, Pill, Spacer } from '@/components/utility'
import { cards, features } from '@/data'
import { faqs } from '@/data'
import { Disclosure, Transition } from '@headlessui/react'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      {/* Hero */}
      <Section className={['gap-16 w-full h-screen text-neutral-50 bg-dots bg-cover bg-center bg-no-repeat items-center pt-40'].join(' ')}>
        <h1 className='hidden'>Price Calc by createxp</h1>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h2 className='font-krona text-4xl-krona'>Charge what you're worth</h2>
          <p className='text-lg'>Simplify the process of determining how much to charge for a product or service.</p>
          <Button
            variant='white'
            text={"Get Started, it's free!"}
            onClick={() => router.push('/app')}
          />
        </div>
        <img src="/heroImg.png" alt="Price Calc" />
      </Section>
      {/* Spacer */}
      <Spacer height='200px' />
      {/* Cards */}
      <Section className='justify-center items-center'>
        <h2 className='font-krona text-4xl-krona'>Pricing made easy</h2>
        <div className="flex flex-col md:flex-row gap-12 mt-16">
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
      {/* Spacer */}
      <Spacer height='92px' />
      {/* Features */}
      <Section className='justify-center items-center gap-20'>
        <h2 className='font-krona text-4xl-krona'>Features you'll Love</h2>
        {
          features.map((feature, index) => (
            <div className={[
              "flex gap-8",
              index % 2 !== 0 ? "flex-row-reverse" : "flex-row",
            ].join(' ')} key={index}>
              <div className="w-full relative">
                <img src={feature.img} alt={feature.title} width={'100%'} />
                {feature.pill && <Pill label={feature.pill} color='success' className="absolute -top-4 left-1/2 -translate-x-1/2" />}
              </div>
              <div className="flex flex-col justify-center gap-3 w-full">
                <h3 className='font-krona text-xl'>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))
        }
      </Section>
      {/* Spacer */}
      <Spacer height='92px' />
      {/* FAQs */}
      <Section className='justify-center items-center gap-10 w-full'>
        <h2 className='font-krona text-4xl-krona'>FAQs</h2>
        <div className='flex flex-col w-full gap-6'>
          {
            faqs.map((faq, index) => (
              <div className="shadow-3xl py-2 rounded-lg border-2 border-black w-full">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="px-4 py-2 md:py-4 md:px-8 text-left flex justify-between items-center w-full">
                        {faq.question}
                        <FiChevronDown
                          className={
                            open
                              ? "rotate-180 transform duration-75"
                              : "transform duration-75 ease-out"
                          }
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform -translate-y-4"
                        enterTo="transform translate-y-0"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform translate-y-0"
                        leaveTo="transform -translate-y-4 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 px-4 py-2 md:py-4 md:px-8">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            ))
          }
        </div>
      </Section>
      {/* Spacer */}
      <Spacer height='92px' />
      {/* CTA */}
      <Section className='justify-center items-center gap-10 w-full bg-dots-full bg-center bg-cover bg-no-repeat text-neutral-50 py-20'>
        <h2 className='font-krona text-2xl text-center'>Stop Underestimating Your Work,<br />Start Getting Paid What You Deserve.</h2>
        <Button
          variant='white'
          text={"Get Started, it's free!"}
          onClick={() => router.push('/app')}
        />
        <p>
          a project by <a href="https://createxp.in/" target="_blank" rel="noreferrer" className="text-neutral-50 underline">createxp</a>
        </p>
      </Section>
    </div>
  )
}

export default Home