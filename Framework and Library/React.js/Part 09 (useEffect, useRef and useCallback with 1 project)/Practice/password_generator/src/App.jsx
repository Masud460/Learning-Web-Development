import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNum) str += "0123456789";
    if (allowChar) str += "!@#$%^&*()_+=[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNum, allowChar]);

  // useEffect
  useEffect(() => {
    generatePassword();
  }, [length, allowNum, allowChar]);

  // useRef
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, -1)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-gray-600 w-128 rounded-lg p-4 text-center mt-8 text-yellow-600">
          <h1 className="text-white text-2xl mb-2">Password Generator</h1>
          <div>
            <input
              type="text"
              placeholder="password"
              value={password}
              ref={passwordRef}
              readOnly
              className="outline-none bg-white rounded-l-lg w-94 py-2 px-3 font-semibold  mb-3"
            />
            <button
              className="bg-blue-500 rounded-r-lg w-26 py-2 text-white font-semibold cursor-pointer mb-3"
              onClick={copyToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex gap-x-2 my-3">
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
            <input
              id='number'
              type="checkbox"
              defaultChecked={allowNum}
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
            <input
              id="character"
              type="checkbox"
              defaultChecked={allowChar}
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
