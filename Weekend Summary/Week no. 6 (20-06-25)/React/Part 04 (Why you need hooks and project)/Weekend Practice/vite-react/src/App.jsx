import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  function addValue() {
    setCounter(++counter)
    console.log(counter);
  }
  function removeValue() {
    if (counter > 0) setCounter(--counter);
  }
  return (
    <>
      <h1>My counter</h1>
      <h2>counter value: { counter }</h2>
      <button onClick={addValue}>Add { counter }</button>
      <br />
      <button onClick={removeValue}>Remove { counter }</button>
      <p>footer: { counter }</p>
    </>
  )
}

export default App
