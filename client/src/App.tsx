// import React from "react";
import './App.css'

import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";
import ProductContextProvider from './context/ProductContext';
import CartContextProvider from './context/CartContext';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Header />
        <Main />
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
