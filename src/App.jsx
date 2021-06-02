import React, { useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

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
          <li>USA</li>
        </ul>
      </main>
    </>
  )
}
