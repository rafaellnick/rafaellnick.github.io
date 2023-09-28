import { useState } from 'react'

import rafaellago from './assets/rafaellago.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://linkedin.com/rafaellnick" target="_blank">
          <img src={rafaellago} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Rafael Lago - desenvolvedor web front-end</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicou no botão {count} vezes!
        </button>
        <p>
          Página em construição, React + TypeScript.
        </p>
      </div>
      <p className="read-the-docs">
        On construction.
      </p>
    </>
  )
}

export default App
