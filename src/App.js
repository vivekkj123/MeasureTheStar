import React from 'react'
import { Router } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainSection from './components/MainSection'
function App() {
  return (
    <div className='App'>
      <Header/>
      <MainSection/>
      <Footer/>
     
    </div>
  )
}

export default App
