import React from 'react'
import HourlyRateProfiles from './HourlyRateProfiles'
import PriceCalculator from './PriceCalculator'
import { Spacer } from '@/components/utility'

const CreateTab = () => {
    return (
        <div>
            {/* Hourly Rate Profiles */}
            <HourlyRateProfiles />
            {/* Spacer */}
            <Spacer height='5rem' />
            {/* Price Calculator */}
            <PriceCalculator />
        </div>
    )
}

export default CreateTab