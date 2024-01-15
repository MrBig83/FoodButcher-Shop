// import React from "react";
import './App.css'

import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";
import ProductContextProvider from './context/ProductContext';
import CartContextProvider from './context/CartContext';
import UserContextProvider from './context/UserContext';
import OrderContextProvider from './context/OrderContext';
import ErrorContextProvider from './context/ErrorContext';


function App() {
  // States

  

  return (
    <ProductContextProvider>
      <UserContextProvider>
      <CartContextProvider>
      <OrderContextProvider>
      <ErrorContextProvider>
        <Header />
        <Main />
        <Footer />
      </ErrorContextProvider>
      </OrderContextProvider>
      </CartContextProvider>
      </UserContextProvider>
    </ProductContextProvider>
  )
}

export default App
