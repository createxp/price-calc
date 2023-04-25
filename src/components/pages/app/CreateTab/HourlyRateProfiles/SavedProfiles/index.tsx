import React from 'react'
import { useGlobals } from '@/contexts'
import Profile from './Profile'

const SavedProfiles = () => {
    const { hourlyRateProfiles } = useGlobals()
    return (
        <div className='w-full flex flex-col gap-6 md:gap-4'>
            {
                hourlyRateProfiles.length > 0 ?
                    hourlyRateProfiles.map((profile, index) => {
                        return (
                            <Profile profile={profile} key={index} />
                        )
                    })
                    :
                    <div className='w-full flex flex-col gap-2'>
                        <p className='w-full'>
                            No Profiles Saved. You can save your hourly rate profiles below.
                        </p>
                    </div>
            }
        </div>
    )
}

export default SavedProfiles