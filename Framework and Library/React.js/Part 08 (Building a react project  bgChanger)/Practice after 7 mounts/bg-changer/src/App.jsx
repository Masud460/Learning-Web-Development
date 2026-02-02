import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  function changeBg(e) {
    setColor(`${e.target.innerHTML.toLowerCase()}`);
  }
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        id="container"
        className="w-full h-full bg-black relative"
      >
        <div
          onClick={changeBg}
          className="w-[60%] h-24 bg-white rounded-full absolute bottom-10 left-65 flex justify-center items-center gap-2"
        >
          <button className="btn bg-red-500">Red</button>
          <button className="btn bg-yellow-500">Yellow</button>
          <button className="btn bg-green-500">Green</button>
          <button className="btn bg-blue-500">Blue</button>
          <button className="btn bg-black">Black</button>
          <button className="rounded-full text-black shadow-2xl shadow-black text-[18px] font-semibold px-6 py-2 cursor-pointer hover:px-8 hover:py-3 transition-all">
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;