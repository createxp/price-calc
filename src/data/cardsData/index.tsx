import React from "react";
import { FiDollarSign, FiUser } from "react-icons/fi";
import { RiCalculatorLine } from 'react-icons/ri'
const cards: {
    icon: React.ReactNode;
    content: string;
}[] = [
        {
            icon: <FiDollarSign size={24} />,
            content:
                "Say goodbye to guesswork and hello to accurate pricing. Our price calculator ensures you get paid what you deserve for your hard work",
        },
        {
            icon: <RiCalculatorLine size={24} />,
            content:
                "No more time wasted on manual calculations. Our tool calculates your hourly rate and service subtotal in seconds, giving you more time to focus on what you do best.",
        },
        {
            icon: <FiUser size={24} />,
            content:
                "Create profiles for different services and know exactly how much to charge for each. Impress your clients with professional and accurate pricing every time.",
        },
    ];
export default cards;
