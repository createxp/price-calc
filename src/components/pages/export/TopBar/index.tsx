import { Button } from '@/components/utility'
import { useGlobals } from '@/contexts'
import React from 'react'
import ReactToPrint from 'react-to-print'
import html2canvas from 'html2canvas'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

const TopBar = () => {
    const { pdfRef, rows } = useGlobals()

    const router = useRouter()

    const generatePNG = () => {
        html2canvas(pdfRef.current).then(canvas => {
            const link = document.createElement('a')
            link.download = 'Price-Calc.png'
            link.href = canvas.toDataURL()
            link.click()
        })
    }
    const generateCSV = () => {
        // Generate CSV from rows with headers
        const headers = 'Title,Hours,Rate,Total'
        const csv = rows.map(row => {
            return `${row.title},${row.hours},${row.rate},${row.total}`
        }).join('\n')
        const csvWithHeaders = `${headers}\n${csv}`
        const link = document.createElement('a')
        link.download = 'Price-Calc.csv'
        link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csvWithHeaders)}`
        link.click()
    }
    return (
        <div className='flex justify-between w-full'>
            <div className='flex gap-4'>
                <Button
                    text='Go Back'
                    onClick={() => router.push('/app')}
                    icon={<FiArrowLeft size={20} />}
                />
            </div>
            <div className="flex gap-4">
                <ReactToPrint
                    trigger={() => (
                        <Button
                            text='Export as PDF'
                        />
                    )}
                    content={() => pdfRef.current}
                    documentTitle='Price-Calc'
                    onAfterPrint={() => {
                        console.log('Printed')
                    }}
                />
                <Button
                    text='Export as CSV'
                    onClick={generateCSV}
                />
                <Button
                    text='Export as PNG'
                    onClick={generatePNG}
                />
            </div>
        </div>
    )
}

export default TopBar