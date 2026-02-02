import { useState, useCallback, useEffect, useRef } from "react";
function PassGen() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowRoman, setAllowRoman] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [pass, setPass] = useState("");

  // useRef hook
  const passRef = useRef(null);
  const copyPass = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  // Generate Password
  const generatePassword = useCallback(() => {
    // Password Engine
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let roman = "I II III IV V VI VII VIII IX X";
    let char = "!@#$%^&*()_+-=[]{}";

    // Generated Password
    let pass = "";

    // Generation Logic
    if (allowNum) str += nums;
    if (allowRoman) str += roman;
    if (allowChar) str += char;

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPass(pass);
  }, [length, allowNum, allowRoman, allowChar, setPass]);

  useEffect(() => {
    generatePassword();
  }, [length, allowNum, allowRoman, allowChar, generatePassword]);

  return (
    <>
      <div className="w-128 h-40 bg-[#333] rounded-2xl flex justify-center items-center flex-col gap-4 text-yellow-600 m-6">
        <h1 className="text-3xl text-white">Password Generator</h1>
        <div>
          <input
            ref={passRef}
            className="w-[420px] bg-white text-black rounded-tl-md rounded-bl-md py-1 px-3"
            type="text"
            disabled
            value={pass}
            placeholder="password"
          />
          <button
            onClick={copyPass}
            title="copy to clipboard"
            className="text-white bg-blue-500 rounded-tr-md rounded-br-md py-1 px-3 font-semibold cursor-pointer"
          >
          copy
          </button>
        </div>
        <div
          className="flex justify-center
       gap-2"
        >
          <input
            type="range"
            value={length}
            min={0}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <p>Length: {length}</p>
          <input
            defaultChecked={allowNum}
            type="checkbox"
            id="number"
            onChange={() => setAllowNum((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>
          <input
            defaultChecked={allowRoman}
            type="checkbox"
            id="roman"
            onChange={() => setAllowRoman((prev) => !prev)}
          />
          <label htmlFor="roman">Roman</label>
          <input
            defaultChecked={allowChar}
            type="checkbox"
            id="character"
            onChange={() => setAllowChar((prev) => !prev)}
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </>
  );
}
export default PassGen;
