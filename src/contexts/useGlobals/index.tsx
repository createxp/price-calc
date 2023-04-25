import { HourlyRateProfileType } from "@/types";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { Toaster } from "react-hot-toast";

interface GlobalContextType {
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
    hourlyRateProfiles: HourlyRateProfileType[];
    setHourlyRateProfiles: React.Dispatch<React.SetStateAction<HourlyRateProfileType[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userCurrency: {
        currency: string;
        symbol: string;
    }
    setUserCurrency: React.Dispatch<React.SetStateAction<{
        currency: string;
        symbol: string;
    }>>;
    rows: {
        id: number;
        title: string;
        hours: string;
        rate: string;
        total: string;
    }[];
    setRows: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
        hours: string;
        rate: string;
        total: string;
    }[]>>;
    grandTotal: string;
    setGrandTotal: React.Dispatch<React.SetStateAction<string>>;
    pdfRef: React.MutableRefObject<any>;
    screenSize: 'mobile' | 'tablet' | 'desktop';
}
const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

interface GlobalProviderProps {
    children: React.ReactNode
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [selectedTab, setSelectedTab] = useState<number>(0)
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { tab } = router.query;
    useEffect(() => {
        if (tab) {
            if (tab === 'create') {
                setSelectedTab(0);
            }
            if (tab === 'saved') {
                setSelectedTab(1);
            }
        }
        else {
            setSelectedTab(0);
        }
    }, [tab]);

    const [userCurrency, setUserCurrency] = useState<{
        currency: string;
        symbol: string;
    }>({
        currency: 'INR',
        symbol: '₹'
    })
    const [hourlyRateProfiles, setHourlyRateProfiles] = useState<HourlyRateProfileType[]>([])

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

    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setScreenSize('desktop')
            } else if (window.innerWidth > 760) {
                setScreenSize('tablet')
            } else {
                setScreenSize('mobile')
            }
            // console.log('screenSize', screenSize);
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // useMemo
    const value = useMemo(() => {
        return {
            selectedTab,
            setSelectedTab,
            loading,
            setLoading,
            hourlyRateProfiles,
            setHourlyRateProfiles,
            userCurrency,
            setUserCurrency,
            rows,
            setRows,
            grandTotal,
            setGrandTotal,
            pdfRef,
            screenSize
        }
    }, [selectedTab, loading, hourlyRateProfiles, userCurrency, rows, grandTotal, pdfRef, screenSize])

    return (
        <GlobalContext.Provider value={value}>
            {children}
            <Toaster
                position='top-center'
            />
        </GlobalContext.Provider>
    )
}

const useGlobals = () => useContext(GlobalContext)
export default useGlobals