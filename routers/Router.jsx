import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/Login'
import Signin from '../src/components/Signin'
import Cart from '../src/components/Cart'

const Router = () => {
  return (
    <Routes>
        <Route path='/login-page' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Router
