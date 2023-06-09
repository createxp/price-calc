import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiX } from 'react-icons/fi'

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
}

const Modal = (props: ModalProps) => {
    const {
        isOpen,
        onClose,
        title,
        children,
    } = props
    return (
        <Transition appear show={isOpen} as={Fragment} >
            <Dialog
                as='div'
                className="relative z-50"
                onClose={onClose}
                open={isOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel as={'div'} className={[
                                'rounded-2xl bg-neutral-100 p-6 text-left align-middle shadow-xl',
                                'w-full max-h-[540px] min-h-[300px]',
                                'md:w-fit md:min-w-[500px] md:max-w-[90%]',
                                'overflow-y-scroll',
                                'transform transition-all'
                            ].join(' ')}>
                                <div className="flex items-center justify-between">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="p-2 rounded-full transition-all bg-neutral-200  hover:bg-neutral-300 active:scale-[0.95] cursor-pointer" onClick={onClose}>
                                        <FiX />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal