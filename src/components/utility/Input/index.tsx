import React from 'react'

interface InputProps {
    type: 'text' | 'url' | 'color' | 'range' | 'file',
    placeholder?: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id: string,
    name: string,
    fit?: boolean,
    wrapperClassName?: string,
    inputClassName?: string,
    labelClassName?: string,
    required?: boolean,
    disabled?: boolean,
    min?: number,
    max?: number,
    step?: number,
    label?: string,
}

const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    id,
    name,
    wrapperClassName,
    fit = false,
    inputClassName,
    labelClassName,
    required = true,
    disabled = false,
    min,
    max,
    step,
    label,
    ...props
}: InputProps) => {
    if (type === 'color') {
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
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    className={[
                        'outline-none border border-neutral-300 rounded-lg p-1 w-full min-w-[80px] max-w-[100px]',
                        'colorInput',
                        disabled && 'cursor-not-allowed',
                        inputClassName
                    ].join(' ')}
                    required={required}
                    disabled={disabled}
                    {...props}
                />
            </div>
        )
    }
    if (type === 'range') {
        return (
            <div className={[
                'flex flex-col gap-1',
                !fit ? 'w-full' : 'w-fit',
                disabled && 'opacity-50 cursor-not-allowed',
                wrapperClassName
            ].join(' ')}>
                <label htmlFor={name} className={[
                    'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                    labelClassName
                ].join(' ')}>
                    {label} ({value}px)
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    className={[
                        'p-1 w-full',
                        'rangeInput',
                        disabled && 'cursor-not-allowed',
                        inputClassName
                    ].join(' ')}
                    required={required}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    {...props}
                />
            </div>
        )
    }
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
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                name={name}
                className={[
                    'outline-none border border-neutral-300 rounded-lg p-2',
                    'active:border-neutral-500 focus:border-neutral-500',
                    disabled && 'cursor-not-allowed',
                    inputClassName
                ].join(' ')}
                required={required}
                disabled={disabled}
                minLength={min}
                maxLength={max}
                {...props}
            />
        </div>
    )
}

export default Input