import { NavbarTabType } from '@/types'
import { FiPlusCircle, FiSave, FiFolder } from 'react-icons/fi'

const navbarTabs: NavbarTabType[] = [
    {
        label: 'Create',
        tab: 'create',
        icon: <FiPlusCircle />,
        active: true,
    },
    {
        label: 'Saved',
        tab: 'saved',
        icon: <FiSave />,
        active: false,
    },
]

export default navbarTabs