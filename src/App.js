//import './App.css'
import React, { useState } from 'react'

function App() {
  let newTime = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(newTime)

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString()
    setCtime(newTime)
  }
  setInterval(UpdateTime, 1000)
  return (
    <>
      <h1>{ctime}</h1>
      {/* <button onClick={UpdateTime}>click me</button> */}
    </>
  )
}

export default App
