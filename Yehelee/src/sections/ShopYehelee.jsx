import React from 'react'
import Footer from '../components/Footer'
import ItemShop from './ItemShop'
import { CartProvider } from '../components/CartContext';
import { ToastContainer } from 'react-toastify';


function ShopYehelee() {
  return (
    <>

    <CartProvider>
      <ToastContainer/>
    <ItemShop/>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default ShopYehelee