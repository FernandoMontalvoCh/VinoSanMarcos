import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeaderImg from './components/HeaderImg'
import ImgDescription from './components/ImgDescription'
import NavBar from './components/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />
      <HeaderImg />
      <br />
      <br />
      <ImgDescription />
      <br />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  )
}

export default App
