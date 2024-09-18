import React,{useState} from 'react'
import Nav from './components/Nav'
import Router from '../routers/Router'
import Dishes from './components/Dishes'
import ResCard from './components/ResCard'

function App() {
  
  return (
    <div className='h-auto max-w-screen'>
      <Nav />
      <Dishes/>
      <ResCard/>
      <Router/>

    </div>
  )
}

export default App

