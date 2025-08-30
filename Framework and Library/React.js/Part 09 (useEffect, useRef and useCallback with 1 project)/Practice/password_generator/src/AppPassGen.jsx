import { useState, useCallback, useEffect, useRef } from "react";

function AppPassGen() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowRomanNum, setAllowRomanNum] = useState(false)
  const [allowBracks, setAllowBracks] = useState(false);
  const [allowSymbs, setAllowSymbs] = useState(false)
  const [password, setPassword] = useState("");

  // Password Generator
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    const romanNums = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    if (allowNum) str += "0123456789";
    if (allowRomanNum) {
      str += romanNums.at(Math.floor(Math.random() * romanNums.length))
      console.log(romanNums.at(Math.floor(Math.random() * romanNums.length)));
  }
    if (allowSymbs) str += "!@#$%^&*_+=";
    if (allowBracks) str += "(){}[]<>";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNum, allowBracks, allowRomanNum, allowSymbs]);

  // useEffect
  useEffect(() => {
    generatePassword();
  }, [length, allowNum, allowRomanNum, allowBracks, allowSymbs]);

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
        <div className="bg-gray-600 w-168 rounded-lg p-4 text-center mt-8 text-yellow-600">
          <h1 className="text-white text-2xl mb-2">Password Generator</h1>
          <div>
            <input
              type="text"
              placeholder="password"
              value={password}
              ref={passwordRef}
              readOnly
              className="outline-none bg-white rounded-l-lg w-134 py-2 px-3 font-semibold  mb-3"
            />
            <button
              className="bg-blue-500 rounded-r-lg w-26 py-2 text-white font-semibold cursor-pointer mb-3"
              onClick={copyToClipboard}
              title="copy to clipboard"
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
              type="checkbox"
              defaultChecked={allowRomanNum}
              onChange={() => {
                setAllowRomanNum(prev => !prev)
              }}
            />
            <label>Roman Numbers</label>
            <input
              id="character"
              type="checkbox"
              defaultChecked={allowSymbs}
              onChange={() => {
                setAllowSymbs((prev) => !prev);
              }}
            />
            <label htmlFor="character">Symbols</label>
            <input
              type="checkbox"
              defaultChecked={allowBracks}
              onChange={() => {
                setAllowBracks(prev => !prev)
              }}
            />
            <label>Brackets</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppPassGen;
