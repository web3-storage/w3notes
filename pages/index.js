import { useState } from 'react'
import Editor from '../components/plate/Editor'

export default function Home() {
  const [currentValue, setCurrentValue] = useState()
  function saveNote(){
      alert(`saving ${JSON.stringify(currentValue)}`)
  }
  return (
    <div className="flex flex-col items-center">
      <button onClick={saveNote}>Create Note</button>
      <div>once you save a note it's permanent, immutable, saved until the end of the network!</div>
      <div className="w-full">
        <Editor onChange={setCurrentValue} />
      </div>
    </div>
  )
}
