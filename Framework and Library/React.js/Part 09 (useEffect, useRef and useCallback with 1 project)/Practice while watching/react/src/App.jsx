import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // Password Generator
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (allowNumber) str += '0123456789';
    if (allowChar) str += '!@#$%^&*()_=+[]{}'

    for (let i = 1; i <= length; i++){
      pass += str[Math.floor(Math.random() * str.length)]
    }

    setPassword(pass)

  }, [length, allowNumber, allowChar, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, allowNumber, allowChar, generatePassword])

  return (
    <>
      <div className='w-full h-full flex justify-center items-start mt-8'>
        <div className="w-138  text-center bg-gray-700 rounded-2xl p-6">
        <h1 className='text-white text-2xl mb-2'>Password Generator</h1>
          <div>
            <input
              type="text"
              value={password} 
              ref={passwordRef}
              className="bg-white w-108 py-1 px-4 rounded-l-md outline-none"
              readOnly
              placeholder='password'
            />

            <input onClick={copyPasswordToClipboard} type="submit" value="Copy" className='bg-blue-500 py-1 px-4 rounded-r-md text-white text-bold cursor-pointer'/>
          </div>
          <div
            className='flex justify-center mt-5 gap-2 text-yellow-600'
          >
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label >Length: { length }</label>
            <input
              type="checkbox"
              defaultChecked={allowNumber}
              onChange={() => {
                setAllowNumber(prev => !prev)
              }}
            />
            <label >Numbers</label>
            <input
              type="checkbox"
              defaultChecked={allowChar}
              onChange={() => {
                setAllowChar(prev => !prev)
              }}
            />
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
