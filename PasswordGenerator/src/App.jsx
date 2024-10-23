import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  let [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copySuccess, setCopySuccess] = useState(false);

  const passwordRef = useRef(null) 
  
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let str2 = '0123456789'
    let str3 = '!@#$%^&*(){}[]:;?/><.,'

    if (numberAllowed) str1 += str2
    if (symbolAllowed) str1 += str3

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str1.length)
      pass += str1.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, symbolAllowed])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, length, numberAllowed, symbolAllowed])

  return (
    <>
      <h1 className="text-4xl text-center font-bold underline text-[#f5f5f5] mt-10">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg p-6 text-center text-[#fe6360] bg-slate-950 mt-10">
        <div className="flex items-center shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 bg-slate-900 outline-none border-none"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-[#3c5ce0] text-slate-900 py-2 px-4 outline-none"
            onClick={copyToClipboard}>
            {copySuccess ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-center text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-x-1">
            <input type="range" 
              min="8" max="32" step="1" value={length} className="cursor-pointer" 
              onChange={(e) => setLength(Number(e.target.value))}/>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={numberAllowed} onChange={(e) => setNumberAllowed(prev => !prev)}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={symbolAllowed} onChange={(e) => setSymbolAllowed(prev => !prev)}/>
            <label>Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
