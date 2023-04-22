import React, { useEffect, useState } from 'react'
import { Input, Select } from '@/components/utility'
import { useGlobals } from '@/contexts'
import { toast } from 'react-hot-toast'
import { FiTrash2 } from 'react-icons/fi'

const ItemRow = ({
    index,
    state,
    setState
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
        const subtotal = Number(state.hours) * Number(state.rate)
        setState((prev) => {
            const newState = [...prev]
            newState[index].total = subtotal.toString()
            return newState
        })
    }

    useEffect(() => {
        calculate()
    }, [state.hours, state.rate])

    return (
        <div className="flex gap-2">
            <Input
                id='title'
                name='title'
                placeholder='Enter a title for your project'
                type='text'
                value={state.title}
                onChange={(e) => {
                    setState((prev) => {
                        const newState = [...prev]
                        newState[index].title = e.target.value
                        return newState
                    })
                    // setTitle(e.target.value)
                }}
            />
            <Input
                id='hours'
                name='hours'
                placeholder='Enter the number of hours'
                type='text'
                value={state.hours}
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
                value={state.rate}
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
            <Input
                id='subtotal'
                name='subtotal'
                placeholder='Subtotal'
                type='text'
                value={`${userCurrency.symbol} ${state.total}`}
                onChange={(e) => { }}
                wrapperClassName='w-fit'
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
                            const filtered = newState.filter((item) => item.id !== state.id)
                            return filtered
                        })
                    }}
                />
            </div>
        </div>
    )
}

export default ItemRow