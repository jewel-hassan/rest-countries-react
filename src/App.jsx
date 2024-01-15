import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <div>
       <Countries />
       <Footer />
      </div>
      
    </>
  )
}

export default App
