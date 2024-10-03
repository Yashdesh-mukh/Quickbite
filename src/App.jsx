import React,{useState} from 'react'
import Nav from './components/Nav'
import Router from '../routers/Router'
import Dishes from './components/Dishes'
import ResCard from './components/ResCard'
import Features from './components/Features'

function App() {
  
  return (
    <div className='h-auto max-w-screen'>
      <Nav />
      <Dishes/>
      <ResCard/>
      <Router/>
      <Features/>

    </div>
  )
}

export default App

