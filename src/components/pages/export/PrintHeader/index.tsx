import React from 'react'

const PrintHeader = () => {
    return (
        <div className="flex justify-between items-center bg-neutral-900 text-neutral-50">
            <div className="flex w-[40%] p-4">
                <span className="font-medium">Title</span>
            </div>
            <div className="flex w-[20%] p-4">
                <span className="font-medium">Hours</span>
            </div>
            <div className="flex w-[20%] p-4">
                <span className="font-medium">Rate</span>
            </div>
            <div className="flex w-[20%] p-4">
                <span className="font-medium">Total</span>
            </div>
        </div>
    )
}

export default PrintHeader