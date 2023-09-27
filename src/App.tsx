import { useState } from 'react'

import viteLogo from './assets/lauradesmonte.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://instagram.com/lauragismonti" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Laura Gismonti, odontologista</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Votaram na Laura no BBB {count} vezes!
        </button>
        <p>
          Ado ado ado o Quintão é um viado.
        </p>
      </div>
      <p className="read-the-docs">
        Um abraço à Central do Galo 2.0
      </p>
    </>
  )
}

export default App
