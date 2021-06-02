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
        <h1>$Exchange Rate Calculator$</h1>
      </header>
      <main>
        <div className="exchange">
          <form>
            <input type="number" placeholder="0.00" />
          </form>
          <button>Calculate</button>
        </div>
        <ul>
          {Object.entries(currency).map(([countryCode, countryValue]) => {
            return (
              <li>
                {countryCode}: {countryValue}
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
