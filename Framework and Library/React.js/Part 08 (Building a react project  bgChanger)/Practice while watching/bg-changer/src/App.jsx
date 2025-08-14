import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  function changeColor(e) {
    let color = e.target.id;
    setColor(color)
  }

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full relative"
      >
        <div
          id="buttons"
          className="absolute bottom-10 left-45 bg-white border border-black rounded-md"
        >
          <button
            onClick={changeColor}
            id="red"
            className="btn bg-red-600 text-white"
          >
            Red
          </button>
          <button onClick={changeColor} id="green" className="btn bg-green-500">
            Green
          </button>
          <button
            onClick={changeColor}
            id="yellow"
            className="btn bg-yellow-300"
          >
            Yellow
          </button>
          <button
            onClick={changeColor}
            id="black"
            className="btn bg-black text-white"
          >
            Black
          </button>
          <button
            onClick={changeColor}
            id="purple"
            className="btn bg-purple-600"
          >
            Purple
          </button>
          <button
            onClick={changeColor}
            id="orange"
            className="btn bg-orange-400"
          >
            Orange
          </button>
          <button onClick={changeColor} id="white" className="btn bg-white">
            White
          </button>
          <button
            onClick={() => setColor('gray')}
            id="gray"
            className="btn bg-gray-700 text-white"
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App
