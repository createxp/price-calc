import { Button, Input } from '@/components/utility'
import { useGlobals } from '@/contexts'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FiPlus } from 'react-icons/fi'

const CreateNewProfile = () => {
    const { hourlyRateProfiles, setHourlyRateProfiles } = useGlobals()

    // Input States
    const [profileName, setProfileName] = useState('')
    const [hourlyRate, setHourlyRate] = useState('')
    const [annualSalary, setAnnualSalary] = useState('')

    const onSave = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setHourlyRateProfiles([...hourlyRateProfiles, {
            id: hourlyRateProfiles.length + 1,
            name: profileName,
            hourlyRate: Number(hourlyRate)
        }])
        setHourlyRate('')
        setAnnualSalary('')
        setProfileName('')
    }
    return (
        <form onSubmit={onSave} className='flex flex-col gap-4 justify-center items-center w-full'>
            <h3 className='w-full text-xl font-semibold'>
                Create New Profile
            </h3>
            <div className="flex flex-col gap-2 md:gap-10 justify-center items-center w-full md:mt-6">
                <Input
                    id='profileName'
                    label='Profile Name'
                    name='profileName'
                    type='text'
                    placeholder='Website Development'
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                />
                <div className='flex justify-center items-center gap-2 md:gap-6 w-full flex-col md:flex-row'>
                    <Input
                        id='hourlyRate'
                        label='Hourly Rate'
                        name='hourlyRate'
                        type='text'
                        placeholder='1000'
                        value={hourlyRate}
                        onChange={(e) => {
                            // check if value is a number
                            if (isNaN(Number(e.target.value))) {
                                // do not allow non-numbers
                                toast.error('Only numbers are allowed')
                            } else {
                                setHourlyRate(e.target.value)
                            }
                        }}
                        disabled={annualSalary.length > 0}
                    />
                    <span>OR</span>
                    <Input
                        id='annualSalary'
                        label='Desired Annual Salary'
                        name='annualSalary'
                        type="text"
                        placeholder='2500000'
                        value={annualSalary}
                        onChange={(e) => {
                            // check if value is a number
                            if (isNaN(Number(e.target.value))) {
                                // do not allow non-numbers
                                toast.error('Only numbers are allowed')
                            } else {
                                setAnnualSalary(e.target.value)
                                setHourlyRate((Number(e.target.value) / 2080).toFixed(0))
                            }
                        }}
                        required={hourlyRate.length === 0}
                    />
                </div>
            </div>
            <Button className='text-sm md:text-base' type='submit' text={'Add New Profile'} icon={<FiPlus className='text-base md:text-2xl' />} wFull />
        </form>
    )
}

export default CreateNewProfile