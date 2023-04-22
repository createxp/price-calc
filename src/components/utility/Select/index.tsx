import React from 'react'

interface SelectProps {
    placeholder?: string
    options: {
        value: string | number
        label: string
    }[]
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    id: string
    name: string
    fit?: boolean
    wrapperClassName?: string
    selectClassName?: string
    labelClassName?: string
    required?: boolean
    disabled?: boolean
    label?: string
}

const Select = ({
    placeholder,
    options,
    value,
    onChange,
    id,
    name,
    wrapperClassName,
    fit = false,
    selectClassName,
    labelClassName,
    required = true,
    disabled = false,
    label,
}: SelectProps) => {
    return (
        <div className={[
            'flex flex-col gap-1 relative',
            !fit ? 'w-full' : 'w-fit',
            disabled && 'opacity-50 cursor-not-allowed',
            wrapperClassName
        ].join(' ')}>
            <label htmlFor={name} className={[
                'text-sm text-neutral-700 ml-1 whitespace-nowrap absolute -top-6',
                labelClassName
            ].join(' ')}>
                {label}
            </label>
            <select
                className={[
                    'outline-none border border-neutral-300 rounded-lg p-1 py-2 h-full',
                    'active:border-neutral-500 focus:border-neutral-500',
                    disabled && 'cursor-not-allowed',
                    selectClassName
                ].join(' ')}
                onChange={onChange}
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
            >
                <option value=''>
                    {placeholder}
                </option>
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.value} className='break-words'>
                                {option.label}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select