import React from 'react'
import { currencies, Currency } from 'currencies.json'
import { useGlobals } from '@/contexts'
import { Select } from '@/components/utility'

const CurrencySelector = () => {
    const { userCurrency, setUserCurrency } = useGlobals()

    return (
        <div>
            <Select
                id='currency'
                name='currency'
                placeholder='Select a currency'
                options={currencies.map((currency: Currency) => ({
                    value: currency.code,
                    label: `${currency.code} - ${currency.symbol}`
                }))}
                value={userCurrency.currency}
                onChange={(e) => setUserCurrency({
                    currency: e.target.value,
                    symbol: currencies.find((currency: Currency) => currency.code === e.target.value)?.symbol || ''
                })}
                fit
                selectClassName='w-fit max-w-[120px] md:max-w-[180px]'
            />
        </div>
    )
}

export default CurrencySelector