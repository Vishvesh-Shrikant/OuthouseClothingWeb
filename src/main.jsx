import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Components/Pages/Home/Home.jsx'
import Shop from './Components/Pages/Shop/Shop.jsx'
import About from './Components/Pages/About/About.jsx'
import SignInPage from './Components/Pages/SignIn/SignInPage.jsx'
import Account from './Components/Pages/Account/Account.jsx'
import Cart from './Components/Pages/Cart/Cart.jsx'
import Orders from './Components/Pages/Account/Orders/Orders.jsx'
import SingleProductDetail from './Components/Pages/Shop/SingleProductDetail.jsx'
import AccDetails from './Components/Pages/Account/Details/AccDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/account/my-orders' element={<Orders/>}/>
          <Route path='/account/account-details' element={<AccDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shop/:prodID' element={<SingleProductDetail/>}/>
        </Route>
        <Route path='/signin' element={<SignInPage/>}/>
      </Route>
    </>
    
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
