import React from 'react'
import SavedProfiles from './SavedProfiles'
import CreateNewProfile from './CreateNewProfile'
import CurrencySelector from './CurrencySelector'

const HourlyRateProfiles = () => {
    return (
        <div className='flex flex-col gap-8 items-center justify-center w-full'>
            <div className="flex w-full justify-between items-center gap-2">
                <h2 className='font-krona text-xl md:text-2xl w-full font-bold'>
                    Your Hourly Rate Profiles
                </h2>
                <CurrencySelector />
            </div>
            <div className='flex flex-col justify-between w-full gap-10'>
                <SavedProfiles />
                <CreateNewProfile />
            </div>
        </div>
    )
}

export default HourlyRateProfiles