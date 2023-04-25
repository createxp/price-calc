import React from 'react'
import { Screen } from '@/components/app'
import { CreateTab, SavedTab } from '@/components/pages/app'
import { useGlobals } from '@/contexts'
import { Spacer } from '@/components/utility'
import Head from 'next/head'

const App = () => {
    const { selectedTab } = useGlobals()
    return (
        <Screen className='w-full min-h-screen bg-neutral-100'>
            <Head>
                <title>Price-Calc by createxp</title>
            </Head>
            {/* Create Page */}
            {selectedTab === 0 && <CreateTab />}
            {/* Saved Page */}
            {selectedTab === 1 && <SavedTab />}
            <Spacer height='4rem' />
            <div className='flex flex-col justify-center items-center'>
                a project by
                <a href="https://createxp.in/" target="_blank" rel="noreferrer" className="text-neutral-50 underline">
                    <img src="/logo.png" alt="createxp" width={'128px'} />
                </a>
            </div>
        </Screen>
    )
}

export default App