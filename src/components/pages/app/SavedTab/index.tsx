import React from 'react'
import { Pill } from '@/components/utility'
import { FiInfo } from 'react-icons/fi'

const SavedTab = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {/* Coming Soon Text */}
            <Pill label='Coming Soon' color='info' icon={<FiInfo />} />
        </div>
    )
}

export default SavedTab