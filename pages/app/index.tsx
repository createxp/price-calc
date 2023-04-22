import React from 'react'
import { Screen } from '@/components/app'
import { CreateTab, SavedTab } from '@/components/pages/app'
import { useGlobals } from '@/contexts'

const App = () => {
    const { selectedTab } = useGlobals()
    return (
        <Screen className='w-full min-h-screen bg-neutral-100'>
            {/* Create Page */}
            {selectedTab === 0 && <CreateTab />}
            {/* Saved Page */}
            {selectedTab === 1 && <SavedTab />}
        </Screen>
    )
}

export default App