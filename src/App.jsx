import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      {/* <Navbar />
      <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
      </Routes> */}
      <About/>
    </>
  )
}

export default App