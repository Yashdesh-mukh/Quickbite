import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Signin from './components/Signin'
import Login from './components/Login'
import Router from '../routers/Router'
function App() {
  return (
    <div className='h-auto max-w-screen bg-slate-400'>
      <Nav/>
      <Router/>
    </div>
  )
}

export default App

