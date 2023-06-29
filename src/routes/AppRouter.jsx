import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import NotFound from '../pages/NotFound/NotFound'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/products' element={<Products/>}>Products</Route>
        <Route path='*' element={<NotFound/>}>NotFound</Route>
    </Routes>
  )
}

export default AppRouter