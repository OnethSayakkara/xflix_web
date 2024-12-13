import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Router,Route } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
    <main className='bg-slate-500'>
     
    <Header/>
    </main>

    </>
  )
}

export default App
