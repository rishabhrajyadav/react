import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>rry is coding</h1>
      <Card channel="rry1" />
      <Card/>
    </>
  )
}

export default App
