import { PrintHeader, PrintRow, TopBar } from '@/components/pages/export'
import { Spacer } from '@/components/utility'
import { useGlobals } from '@/contexts'
import React from 'react'

const Export = () => {
    const { pdfRef, rows, grandTotal, userCurrency } = useGlobals()
    return (
        <div className='flex flex-col justify-center items-center gap-6 p-6 bg-neutral-200'>
            <TopBar />
            <Spacer height='2' />
            <h2>
                <span className='font-krona text-2xl font-bold'>Export Preview</span>
            </h2>
            <div ref={pdfRef} className='overflow-scroll w-full min-h-screen md:flex md:justify-center'>
                {/* A4 Paper with the pricing table */}
                <div className='w-[8.27in] h-[11.69in] bg-white p-6 rounded-lg'>
                    {/* Header */}
                    <PrintHeader />
                    {/* Table */}
                    <div className='flex flex-col mt-2'>
                        {/* Rows */}
                        {
                            rows.map((row, index) => (
                                <PrintRow
                                    index={index}
                                    key={row.id}
                                    title={row.title}
                                    hours={row.hours}
                                    rate={row.rate}
                                    total={row.total}
                                />
                            ))
                        }
                    </div>
                    {/* Grand Total */}
                    <div className='flex justify-between items-center bg-neutral-900 text-neutral-50'>
                        <div className='flex w-[80%] p-4'>
                            <span className='font-medium'>Grand Total</span>
                        </div>
                        <div className='flex w-[20%] p-4'>
                            <span className='font-medium'>{userCurrency.symbol} {grandTotal}</span>
                        </div>
                    </div>
                    {/* Branding */}
                    <div className='flex justify-center items-center mt-4'>
                        <span className='text-neutral-500'>
                            Made using <span className='font-krona text-primary-500'>Price-Calc</span> by
                        </span>
                        <a href="https://createxp.in" target='_blank'>
                            <img src="/logo.png" alt="createxp" width={'100px'} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Export