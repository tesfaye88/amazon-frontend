import React from 'react'
// import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router"
import Payment from './Components/Pages/Payment/Payment'
import Auth from './Components/Pages/Auth/Auth'
import Landing from './Components/Pages/Landing/Landing'
import Orders from './Components/Pages/Orders/Orders'
import Cart from './Components/Pages/Cart/Cart'
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute'
const stripePromise = loadStripe("pk_test_51QS1GHIARExhdFn5zuo6N6H7JMFDdeMK2AdFI7hQN19ZhPeOTDpPmesuXA7YMAuV840VwKgyLFEO6StLgfONCCZa001B6EljCR");

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/payments" element={
          <ProtectedRoute message={"you must log in to pay "} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>

        } />
        <Route path="/orders" element={
           <ProtectedRoute 
           message={"you must log in to  access your orders "}
            redirect={"/orders"}>
        
           <Orders />
           
         </ProtectedRoute>
          } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>


  )
}

export default Routing

