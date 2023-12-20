// import { Route, Routes } from "react-router";
// import "./Cart.css"

import ProductCard from "../ProductCard/ProductCard";
import IProduct from "../../interfaces/IProduct";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";





const Cart = () => {
  const { productsInCart } = useContext(CartContext);
  


  return (
    <div className="Products">
        <h1>Din kundvagn:</h1>
        {productsInCart?.map((product: IProduct) => (
        <div className="ProductCardRender" key={product.id}>
      
            <ProductCard product={product} />
         
        </div>
      ))}
        

      </div>
    
  );
};
export default Cart;
