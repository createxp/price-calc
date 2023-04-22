import { HourlyRateProfileType } from "@/types";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { Toaster } from "react-hot-toast";

interface GlobalContextType {
    selectedTab: number;
    setSelectedTab: (selectedTab: number) => void;
    hourlyRateProfiles: HourlyRateProfileType[];
    setHourlyRateProfiles: (hourlyRateProfiles: HourlyRateProfileType[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    userCurrency: {
        currency: string;
        symbol: string;
    }
    setUserCurrency: (userCurrency: {
        currency: string;
        symbol: string;
    }) => void;
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
            setUserCurrency
        }
    }, [selectedTab, loading, hourlyRateProfiles, userCurrency])

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