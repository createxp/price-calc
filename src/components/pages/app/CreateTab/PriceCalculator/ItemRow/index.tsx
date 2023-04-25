import React, { useEffect, useState } from 'react'
import { Input, Select } from '@/components/utility'
import { useGlobals } from '@/contexts'
import { toast } from 'react-hot-toast'
import { FiTrash2 } from 'react-icons/fi'

const ItemRow = ({
    index,
    state,
    setState,
}: {
    index: number
    state: {
        id: number
        title: string
        hours: string
        rate: string
        total: string
    }
    setState: React.Dispatch<React.SetStateAction<{
        id: number
        title: string
        hours: string
        rate: string
        total: string
    }[]>>
}) => {
    const { hourlyRateProfiles, userCurrency } = useGlobals()

    const calculate = () => {
        const subtotal = Number(hours) * Number(rate)
        setState((prev) => {
            const newState = [...prev]
            newState[index].total = subtotal.toString()
            return newState
        })
    }

    const {
        id,
        title,
        hours,
        rate,
        total,
    } = state

    useEffect(() => {
        calculate()
    }, [hours, rate])

    return (
        <div className="flex gap-2 flex-col lg:flex-row">
            <Input
                id='title'
                name='title'
                placeholder='Enter a title for your project'
                type='text'
                value={title}
                onChange={(e) => {
                    setState((prev) => {
                        const newState = [...prev]
                        newState[index].title = e.target.value
                        return newState
                    })
                    // setTitle(e.target.value)
                }}
                max={32}
            />
            <Input
                id='hours'
                name='hours'
                placeholder='Enter the number of hours'
                type='text'
                value={hours}
                onChange={(e) => {
                    // check if the value is a number
                    if (isNaN(Number(e.target.value))) {
                        // setHours('')
                        toast.error('Only numbers are allowed')
                    } else {
                        setState((prev) => {
                            const newState = [...prev]
                            newState[index].hours = e.target.value
                            return newState
                        })
                        // setHours(e.target.value)
                    }
                }}
            />
            {/* Select Hourly Rate Profile */}
            <Select
                id='rate'
                name='rate'
                placeholder='Select Profile'
                value={rate}
                onChange={(e) => {
                    setState((prev) => {
                        const newState = [...prev]
                        newState[index].rate = e.target.value
                        return newState
                    })
                }}
                options={hourlyRateProfiles.map((profile, index) => ({
                    value: profile.hourlyRate,
                    label: `${profile.name} - ${userCurrency.symbol} ${profile.hourlyRate}/hour`
                }))}
            />
            <div className='flex gap-2'>
                <Input
                    id='subtotal'
                    name='subtotal'
                    placeholder='Subtotal'
                    type='text'
                    value={`${userCurrency.symbol} ${total}`}
                    onChange={(e) => { }}
                    wrapperClassName='lg:w-fit'
                    disabled
                />
                <div className='flex justify-center items-center pl-2'>
                    <FiTrash2
                        size={20}
                        color='red'
                        className='cursor-pointer'
                        onClick={() => {
                            setState((prev) => {
                                const newState = [...prev]
                                // delete the item from the array with the id
                                const filtered = newState.filter((item) => item.id !== id)
                                return filtered
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemRow