import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1)
    console.log(count);
  }
  function removeCount() {
    if (count >= 1) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h4>counter value: {count}</h4>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App
