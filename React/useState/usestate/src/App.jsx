import { useState } from 'react'
import Message from './Text.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Message />
    </>
  )
}

export default App
