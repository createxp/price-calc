import React from 'react'
import { NextPage } from 'next'
import { CTA, Cards, FAQs, Features, Hero } from '@/components/pages/home'

const Home: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Cards */}
      <Cards />
      {/* Features */}
      <Features />
      {/* FAQs */}
      <FAQs />
      {/* CTA */}
      <CTA />
    </>
  )
}

export default Home