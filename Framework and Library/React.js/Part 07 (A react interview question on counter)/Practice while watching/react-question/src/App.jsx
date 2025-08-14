import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  function addValue() {
    setCounter((counter => counter + 1))
    setCounter((counter => counter + 1))
    setCounter((counter => counter + 1))
    setCounter((counter => counter + 1))
  }
  function removeValue() {
    if (counter > 0) setCounter(--counter);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value: { counter }</h2>

      <button
        onClick={addValue}
      >Add {counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove {counter}</button>
      <div>footer: { counter }</div>
    </>
  )
}

export default App
