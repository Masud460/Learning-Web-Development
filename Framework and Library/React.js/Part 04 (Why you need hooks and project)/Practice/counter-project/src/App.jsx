import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    setCounter(counter + 1)
    console.log(counter);
  }

  function removeValue() {
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>Masud's Counter</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <button onClick={removeValue}>Remove {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App
