import React from 'react'
import { NextPage } from 'next'
import { CTA, Cards, FAQs, Features, Hero } from '@/components/pages/home'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Price-Calc by createxp</title>
      </Head>
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