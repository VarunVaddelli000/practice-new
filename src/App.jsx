import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/cart'
import Products from './pages/products'
import Home from './pages/home'
import ProductDetails from './pages/product-details/ProductDeatils'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import ProductDescription from './pages/product-details/ProductDescription'
import ProductSpecification from './pages/product-details/ProductSpecifications'
import RatingsReviews from './pages/product-details/RatingsReviews'
import FrequentlyTogether from './pages/product-details/FrequentlyTogether'
import Register from './pages/Register'
import Todos from './pages/Todos'
import Increment from './pages/increment'
import EditSupplier from './pages/edit'
import SupplierList from './pages/SupplierList'
import PageNotFound from './pages/pageNotFound'
import LogInPage from './pages/LogInPage'

function App() {
  return (
   <>
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/ProductDetails/:productId' element={<ProductDetails/>}>
          <Route path='ProductDescription' element={<ProductDescription/>}></Route>
          <Route path='ProductSpecification' element={<ProductSpecification/>}></Route>
          <Route path='RatingsReviews' element={<RatingsReviews/>}></Route>
          <Route path='FrequentlyTogether' element={<FrequentlyTogether/>}></Route>
      </Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Increment' element={<Increment/>}></Route>
      <Route path='/SupplierList' element={<SupplierList/>}></Route>
      <Route path='/Todos' element={<Todos/>}></Route>
      <Route path='/auth/LogInPage' element={<LogInPage/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    <Outlet/>
   </div>
   </>
  )
}

export default App
