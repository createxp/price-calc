import React from 'react'
import Navbar from '../Navbar'

interface ScreenProps {
    children: React.ReactNode;
    className?: string;
}

const Screen = ({
    children,
    className
}: ScreenProps) => {
    return (
        <div>
            <Navbar />
            <div className='h-5 md:h-10 bg-neutral-100'></div>
            <div className={[
                "lg:px-40 p-4 flex flex-col py-[100px]",
                className
            ].join(' ')}>
                {children}
            </div>
        </div>
    )
}

export default Screen