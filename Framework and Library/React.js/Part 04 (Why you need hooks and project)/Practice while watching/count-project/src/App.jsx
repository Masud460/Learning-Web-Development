import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1)
  }

  function removeCount() {
    if (count > 0) {
      setCount(count - 1)  
    }
  }
    
  return (
    <>
      <h1>Masud's Counter</h1>
      <h3>Counter value: { count }</h3>
      <button
      onClick={addCount}
      >Add { count }</button>
      <button
      onClick={removeCount}
      >Remove {count}</button>
      <p>footer: { count }</p>
    </>
  )
}

export default App
