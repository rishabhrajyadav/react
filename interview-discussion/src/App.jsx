import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter , setCounter] = useState(12);

  const addValue = () => {
    //useState return the value of counter in batches
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }
   
  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>rry1.0 is coding</h1>
      <h2>Counter Value is : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br/>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
