import Image from 'next/image'
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Pill } from '@/components/utility'
import { FiInfo } from 'react-icons/fi'

const NavbarActions = () => {
    return (
        <div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center border-2 border-neutral-800'>
                <Menu>
                    <Menu.Button>
                        <img src={"https://createxp.in/logos/iconSquareBG.png"} alt="avatar" className='object-cover rounded-full ' />
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
                        <Menu.Items className="absolute right-0 top-full w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col justify-center items-center">
                            <div className="px-1 py-3 flex flex-col justify-center items-center gap-2">
                                {/* <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={[
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'group flex gap-1 rounded-md items-center w-full px-2 py-2 text-sm'
                                        ].join(' ')}
                                        onClick={handleLogout}
                                    >
                                        <FiLogOut />
                                        Logout
                                    </button>
                                )}
                            </Menu.Item> */}
                                <Menu.Item>
                                    <Pill label='Coming Soon' color='info' icon={<FiInfo />} />
                                </Menu.Item>
                                <Menu.Item>
                                    <span>
                                        v0.1.0
                                    </span>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default NavbarActions