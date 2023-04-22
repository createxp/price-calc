import { Button } from '@/components/utility'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import ItemRow from './ItemRow'
import { FiDownload, FiPlus } from 'react-icons/fi'
import { useGlobals } from '@/contexts'
import { Menu, Transition } from '@headlessui/react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const PriceCalculator = () => {
    const { userCurrency } = useGlobals()
    const [rows, setRows] = useState<{
        id: number;
        title: string;
        hours: string;
        rate: string;
        total: string;
    }[]>([{
        id: Math.random() * 1000,
        title: '',
        hours: '',
        rate: '',
        total: ''
    }])

    const [grandTotal, setGrandTotal] = useState<string>('')

    const pdfRef = useRef(null)

    useEffect(() => {
        console.table(rows)
        let total = 0
        rows.forEach((row) => {
            total += Number(row.total)
        })
        setGrandTotal(total.toString())
    }, [rows])

    const generatePDF = async () => {
        const element = pdfRef.current
        const canvas = await html2canvas(element)
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'pt', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex justify-between w-full'>
                <h2 className='font-krona text-2xl w-full font-bold'>
                    Calculate Your Price
                </h2>
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
                                        <button
                                            className={[
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'group flex gap-1 rounded-md items-center w-full px-2 py-2 text-sm'
                                            ].join(' ')}
                                            onClick={generatePDF}
                                        >
                                            <span className='font-medium'>Export as PDF</span>
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className='flex flex-col justify-between w-full gap-4 py-8' id='pdf' ref={pdfRef}>
                {
                    rows.map((row, index) => {
                        return (
                            <ItemRow key={index} index={index} state={row} setState={setRows} />
                        )
                    })
                }
                <Button
                    variant='outline'
                    onClick={() => setRows([...rows, {
                        id: Math.random() * 1000,
                        title: '',
                        hours: '',
                        rate: '',
                        total: ''
                    }])}
                    icon={<FiPlus />}
                    text={`Add Item`}
                    wFull
                />
                <div className='flex justify-between w-full'>
                    <h3 className='font-krona text-xl font-bold'>
                        Grand Total
                    </h3>
                    <h3 className='font-krona text-xl font-bold'>
                        {userCurrency.symbol} {grandTotal}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PriceCalculator