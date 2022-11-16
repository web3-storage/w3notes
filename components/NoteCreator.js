import { useState } from 'react'
import { useUploader } from '@w3ui/react-uploader'

import { withIdentity } from './Authenticator'
import Editor from './plate/Editor'

export function NoteCreator({ onCreated }) {
  const [_, { uploadFile }] = useUploader()
  const [currentValue, setCurrentValue] = useState()
  async function saveNote() {
    const cid = await uploadFile(new Blob([JSON.stringify(currentValue)]))
    onCreated(cid)
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

export default withIdentity(NoteCreator)
