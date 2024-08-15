import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Signin from '../src/components/Signin'

const Router = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sigin' element={<Signin/>}/>
    </Routes>
  )
}

export default Router
