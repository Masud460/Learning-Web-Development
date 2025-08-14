import { useState } from 'react'
function App() {
  let [color, setColor] = useState('olive')
  return (
    <>
      <div
        className="w-full h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-15 flex flex-wrap gap-3 rounded bg-white py-3 px-5">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-300 rounded-3xl text-black font-semibold py-2 px-4"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-pink-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="bg-black rounded-3xl text-white font-semibold py-2 px-4"
          >
            Black
          </button>
          <button
            onClick={() => setColor("gray")}
            className="bg-gray-600 rounded-3xl text-white font-semibold py-2 px-4"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("white")}
            className="bg-white rounded-3xl text-black font-semibold py-2 px-4 border"
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App
