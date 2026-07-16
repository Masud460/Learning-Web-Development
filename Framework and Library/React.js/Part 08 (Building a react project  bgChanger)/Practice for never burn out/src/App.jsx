import React from 'react';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black')

  function changeColor(e) {
    let color = e.target.id;
    setColor(color);
  }
  return (
    <div
      className="h-full w-full flex justify-center items-center "
      style={{ backgroundColor: color }}
    >
      <div
        id="btns"
        className="p-4 rounded-md bg-gray-600 border-1 border-white font-semibold"
        onClick={changeColor}
      >
        <button className="btn bg-red-300" id="red">
          Red
        </button>
        <button className="btn bg-green-300" id="green">
          Green
        </button>
        <button className="btn bg-blue-300" id="blue">
          Blue
        </button>
        <button className="btn bg-yellow-300" id="yellow">
          Yellow
        </button>
        <button className="btn bg-white" id="white">
          White
        </button>
        <button className="btn bg-black text-white" id="black">
          Black
        </button>
      </div>
    </div>
  );
}

export default App