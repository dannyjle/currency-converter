import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  useEffect(async () => {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=92a2dadb559f9d373f4e57b6db3171f5`
    )
    if (response.status === 200) {
      console.log(response.data.rates)
      setCurrency(response.data.rates)
    }
  }, [])

  useEffect(() => {
    console.log(currency)
  }, [currency])

  return (
    <>
      <header>
        <h2>$¢€£¥₩₽₹¤₱₦ƒ₮৲৳₨௹฿៛₪₫₭₲₴₵﷼≋₿ŁÐ₳</h2>
        <h1> Exchange Rate Calculator! </h1>
        <h2>$¢€£¥₩₽₹¤₱₦ƒ₮৲৳₨௹฿៛₪₫₭₲₴₵﷼≋₿ŁÐ₳</h2>
      </header>
      <main>
        <div className="exchange">
          <form>
            <input
              type="number"
              onChange={(event) => setAmount(event.target.value)}
              value={amount}
              min="0"
            />
          </form>
        </div>
        <ul>
          {Object.entries(currency).map(([countryCode, countryValue]) => {
            return (
              <li>
                {countryCode}: {(countryValue * amount * 0.82).toFixed(2)}
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
