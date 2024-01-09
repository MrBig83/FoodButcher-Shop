// import { Route, Routes } from "react-router";
import "./Cart.css"

// import ProductCard from "../ProductCard/ProductCard";
import CartProductCard from "../CartProductCard/CartProductCard"
// import IProduct from "../../interfaces/IProduct";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import BackBtn from "../Buttons/backBtn";
import ICartItem from "../../interfaces/ICartItem";





const Cart = () => {
  // const { productsInCart, totalPrice } = useContext(CartContext);
  const { productsInCart, decreaseProductCount, increaseProductCount, removeProduct, totalPrice, numberInCart } = useContext(CartContext);
  // const { productsInCart, setNumberInCart, numberInCart } = useContext(CartContext);
  
  const uniqueProducts = Array.from(new Set(productsInCart)) //För att ta bort alla dubletter 

  
  // productsInCart.forEach(product => {
  //   const checkFor = product.id;
  //   const count = productsInCart.filter((obj) => obj.id === checkFor).length
  //   product.quantity = count    
  // });

// const handleReduce = (product: IProduct) => {
//   decreaseProductCount(product)
// }

  return (
    <div className="Products">
      <BackBtn />
        <h1>Din kundvagn:</h1>
        {uniqueProducts?.map((product: ICartItem) => (
        <div className="ProductCardRender" >
      
            <CartProductCard 
              key={product.product.id}
              product={product.product} 
            />
            <p>Antal: {product.quantity}</p>
            <button onClick={() => decreaseProductCount(product)}>Minska</button>
            <button onClick={() => increaseProductCount(product)}>Öka</button>
            <button onClick={() => removeProduct(product)}>Ta bort</button>
         
        </div>
      ))}
        <p>Totalt antal produkter i kundkorgen: {numberInCart}</p>
        <p>Total summa: {totalPrice}</p>

      </div>
    
  );
};
export default Cart;
