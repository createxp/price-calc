import { useGlobals } from '@/contexts'
import React from 'react'

const PrintRow = ({
    title,
    hours,
    rate,
    total,
    index,
}: {
    title: string
    hours: string
    rate: string
    total: string
    index: number
}) => {
    const { userCurrency } = useGlobals()
    // Table Row with 4 columns - title, hours, rate, total
    return (
        <div className={[
            "flex justify-between items-center border",
            index % 2 === 0 ? "bg-neutral-50" : "bg-neutral-200",
        ].join(' ')}>
            <div className="flex w-[40%] px-4 py-2">
                <span className="font-medium break-all">{title}</span>
            </div>
            <div className="flex w-[20%] px-4 py-2">
                <span className="font-medium">{hours} hours</span>
            </div>
            <div className="flex w-[20%] px-4 py-2">
                <span className="font-medium">{userCurrency.symbol} {rate}/hr</span>
            </div>
            <div className="flex w-[20%] px-4 py-2">
                <span className="font-medium">{userCurrency.symbol} {total}</span>
            </div>
        </div>
    )
}

export default PrintRow