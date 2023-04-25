import { Button } from '@/components/utility'
import React, { useEffect } from 'react'
import ItemRow from './ItemRow'
import { FiDownload, FiPlus } from 'react-icons/fi'
import { useGlobals } from '@/contexts'
import { useRouter } from 'next/router'

const PriceCalculator = () => {
    const { userCurrency, rows, setRows, grandTotal, setGrandTotal } = useGlobals()

    const router = useRouter()

    useEffect(() => {
        console.table(rows)
        let total = 0
        rows.forEach((row) => {
            total += Number(row.total)
        })
        setGrandTotal(total.toString())
    }, [rows])

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='font-krona text-xl md:text-2xl w-full font-bold'>
                    Calculate Your Price
                </h2>
                <Button
                    className='text-sm md:text-base'
                    text={'Export'}
                    icon={<FiDownload className='text-base md:text-2xl' />}
                    onClick={() => router.push('/export')}
                />
            </div>
            <div className='flex flex-col justify-between w-full gap-8 lg:gap-4 py-6 md:py-8' id='pdf' >
                {
                    rows.map((row, index) => {
                        return (
                            <ItemRow key={index} index={index} state={row} setState={setRows} />
                        )
                    })
                }
                <Button
                    className='text-sm md:text-base'
                    variant='outline'
                    onClick={() => setRows([...rows, {
                        id: Math.random() * 1000,
                        title: '',
                        hours: '',
                        rate: '',
                        total: ''
                    }])}
                    icon={<FiPlus className='text-base md:text-2xl' />}
                    text={`Add Item`}
                    wFull
                />
                <div className='flex justify-between w-full font-krona text-lg md:text-xl font-bold'>
                    <h3>
                        Grand Total
                    </h3>
                    <h3>
                        {userCurrency.symbol} {grandTotal}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PriceCalculator

/* 
<Menu as={'div'} className={'relative'}>
    <Menu.Button className={'flex gap-2 justify-center items-center bg-neutral-200 hover:bg-neutral-300 p-2 rounded-lg'}>
        <span className='font-medium'>Export</span>
        <FiDownload />
    </Menu.Button>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <Menu.Items className="absolute right-0 top-full w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col justify-center z-10">
            <div className="p-2 flex flex-col justify-center gap-2">
                <Menu.Item>
                    {({ active }) => (
                        <ReactToPrint
                            trigger={() => (
                                <button
                                    className={[
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex gap-1 rounded-md items-center w-full px-2 py-2 text-sm'
                                    ].join(' ')}
                                >
                                    <span className='font-medium'>Export as PDF</span>
                                </button>
                            )}
                            content={() => pdfRef.current}
                        />
                    )}
                </Menu.Item>
            </div>
        </Menu.Items>
    </Transition>
</Menu>
 */