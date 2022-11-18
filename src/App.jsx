import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

//publicly pages
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage'
import UserOrdersPage from './pages/user/UserOrdersPage'
import UserCartDetailsPage from './pages/user/UserCartDetailPage'
import UserProfilePage from './pages/user/UserProfilePage'

//user components
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent'


//Admin pages
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminChatsPage from './pages/admin/AdminChatsPage'
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'

//user Components
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import ScrollToTop from './utils/scrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>

        <Route element={<RoutesWithUserChatComponent />} >
          {/* puclicly available routes */}

          <Route path='/' element={<HomePage />} />

          <Route path='/product-list' element={<ProductListPage />} />

          <Route path='/product-details' element={<ProductDetailsPage />} />

          <Route path='/product-details/:id' element={<ProductDetailsPage />} />

          <Route path='/cart' element={<CartPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/register' element={<RegisterPage />} />

          <Route path='*' element="Page not exists 404" />

        </Route>
          {/* user protected available routes */}

          <Route element={<ProtectedRoutesComponent admin={false}/>} >

            <Route path='/user' element={<UserProfilePage />} />

            <Route path='/user/my-orders' element={<UserOrdersPage />} /> 

            <Route path='/user/cart-details' element={<UserCartDetailsPage />} />

            <Route path='/user/order-details' element={<UserOrderDetailsPage />} />

          </Route>

        

        



        



        <Route element={<ProtectedRoutesComponent admin={true} />} >

          <Route path='/admin/users' element={<AdminUsersPage />} />
          
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />

          <Route path='/admin/products' element={<AdminProductsPage />} />

          <Route path='/admin/create-new-products' element={<AdminCreateProductPage />} />

          <Route path='/admin/edit-product' element={<AdminEditProductPage />} />

          <Route path='/admin/orders' element={<AdminOrdersPage />} />

          <Route path='/admin/order-details' element={<AdminOrderDetailsPage />} />

          <Route path='/admin/chats' element={<AdminChatsPage />} />

          <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />

        </Route>

        
      </Routes>
      <FooterComponent />
      
    </BrowserRouter>
    
  )
}

export default App
