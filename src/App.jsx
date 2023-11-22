import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import NasaList from './pages/NasaList'
import {useState} from 'react'
function App() {

  return (
    <div className="App">
      <Nav />
      
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/nasaList' element={<NasaList />} />
      </Routes>
      
    </div>
    
  )
}

export default App
