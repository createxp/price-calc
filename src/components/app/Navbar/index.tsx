import { useGlobals } from '@/contexts'
import { navbarTabs } from '@/data'
import { useRouter } from 'next/router'
import React from 'react'
import { NavbarActions } from '@/components/app'

const Navbar = () => {
    const router = useRouter()
    const { selectedTab } = useGlobals()
    return (
        <div className='bg-neutral-100 fixed top-0 z-50 lg:px-40 px-4 w-full shadow'>
            <div className='w-full flex justify-center items-center py-5 select-none relative'>
                {/* Logo */}
                <div className='absolute left-0 top-1/2 -translate-y-1/2'>
                    <img src={"https://createxp.in/logos/logoCondensed.png"} alt="createxp" className='object-cover' width={128} />
                </div>
                {/* Tabs */}
                <div className='flex gap-1 px-1 py-2 border border-neutral-800 w-fit rounded-full relative transition-all'>
                    <div className={[
                        "slider absolute w-[100px] p-4 rounded-full top-1/2 -translate-y-1/2 bg-neutral-800 transition-all",
                        selectedTab === 0 ? "left-1" : "left-[51%]"
                    ].join(' ')}>
                    </div>
                    {navbarTabs.map((tab, index) => (
                        <div key={index} className={[
                            'flex gap-2 items-center justify-center cursor-pointer whitespace-nowrap text-sm w-[100px] z-10 ',
                            selectedTab === index ? 'text-white' : 'text-neutral-800'
                        ].join(' ')} onClick={() => {
                            if (tab.active)
                                router.push(`/app?tab=${tab.tab}`)
                            router.push(`/app?tab=${tab.tab}`)
                        }}>
                            <span>
                                {tab.icon}
                            </span>
                            <span>
                                {tab.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    {/* Currency Selector */}
                    {/* Profile */}
                    <NavbarActions />
                </div>
            </div>
        </div>
    )
}

export default Navbar