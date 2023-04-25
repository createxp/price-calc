import { Button, Input, Modal, Spacer } from '@/components/utility'
import { useGlobals } from '@/contexts'
import { HourlyRateProfileType } from '@/types'
import React, { useState } from 'react'
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi'

interface ProfileProps {
    profile: HourlyRateProfileType
}

const Profile = ({
    profile,
}: ProfileProps) => {
    const { hourlyRateProfiles, setHourlyRateProfiles, userCurrency } = useGlobals()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [profileName, setProfileName] = useState(profile.name)
    const [hourlyRate, setHourlyRate] = useState(profile.hourlyRate.toString())
    const [annualSalary, setAnnualSalary] = useState('')


    const onSave = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setHourlyRateProfiles(hourlyRateProfiles.map((item) => {
            if (item.id === profile.id) {
                return {
                    ...item,
                    name: profileName,
                    hourlyRate: Number(hourlyRate)
                }
            }
            return item
        }))
        setAnnualSalary('')
        setIsModalOpen(false)
    }

    return (
        <div
            className={[
                'flex items-center justify-between gap-2 w-full flex-col md:flex-row',
            ].join(' ')}
        >
            <div className="flex bg-neutral-200 w-full p-2 md:p-3 rounded-lg font-semibold">
                {profile.name} - {userCurrency.symbol} {profile.hourlyRate}/hour
            </div>
            <div className='flex w-full md:w-fit gap-2'>
                <Button
                    icon={<FiEdit className='text-base md:text-2xl' />}
                    onClick={() => {
                        setIsModalOpen(true)
                    }}
                    wFull
                />
                <Button
                    icon={<FiTrash2 className='text-base md:text-2xl' />}
                    onClick={() => {
                        setHourlyRateProfiles(hourlyRateProfiles.filter((item) => item.id !== profile.id))
                    }}
                    wFull
                />
            </div>
            <Modal
                title='Edit Profile'
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <form onSubmit={onSave} className='flex flex-col gap-2 md:gap-10 justify-center items-center w-full mt-4 md:mt-10'>
                    <Input
                        id='profileName'
                        label='Profile Name'
                        name='profileName'
                        type='text'
                        placeholder='Website Development'
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                    />
                    <div className='flex justify-center items-center gap-2 md:gap-4 w-full flex-col md:flex-row'>
                        <Input
                            id='hourlyRate'
                            label='Hourly Rate'
                            name='hourlyRate'
                            type='text'
                            placeholder='1000'
                            value={hourlyRate}
                            onChange={(e) => {
                                // check if value is a number
                                setHourlyRate(e.target.value)
                                if (isNaN(Number(e.target.value))) {
                                    // do not allow non-numbers
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
                                setAnnualSalary(e.target.value)
                                setHourlyRate((Number(e.target.value) / 2080).toFixed(0))
                                if (isNaN(Number(e.target.value))) {
                                    alert('Please enter a number')
                                }
                            }}
                            required={hourlyRate.length === 0}
                        />
                    </div>
                    <Button type='submit' text={'Save Profile'} icon={<FiSave size={18} />} wFull />
                </form>
            </Modal>
        </div>
    )
}

export default Profile