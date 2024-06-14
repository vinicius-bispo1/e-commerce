import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Compras from './pages/Compras'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compras' element={<Compras/>}/>
    </Routes>
    </BrowserRouter>
  )
}
