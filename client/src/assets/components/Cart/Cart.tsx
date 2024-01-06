// import { Route, Routes } from "react-router";
import "./Cart.css"

// import ProductCard from "../ProductCard/ProductCard";
import CartProductCard from "../CartProductCard/CartProductCard"
import IProduct from "../../interfaces/IProduct";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import BackBtn from "../Buttons/backBtn";





const Cart = () => {
  const { productsInCart, decreaseProductCount, increaseProductCount, removeProduct, totalPrice } = useContext(CartContext);
  // const { productsInCart, setNumberInCart, numberInCart } = useContext(CartContext);
  
  const uniqueProducts = Array.from(new Set(productsInCart)) //För att ta bort alla dubletter 

  
  productsInCart.forEach(product => {
    const checkFor = product.id;
    const count = productsInCart.filter((obj) => obj.id === checkFor).length
    product.quantity = count    
  });

// const handleReduce = (product: IProduct) => {
//   decreaseProductCount(product)
// }


  return (
    <div className="Products">
      <BackBtn />
        <h1>Din kundvagn:</h1>
        {uniqueProducts?.map((product: IProduct) => (
        <div className="ProductCardRender" key={product.id}>
      
            <CartProductCard product={product} />
            <p>Antal: {product.quantity}</p>
            <button onClick={() => decreaseProductCount(product)}>Minska</button>
            <button onClick={() => increaseProductCount(product)}>Öka</button>
            <button onClick={() => removeProduct(product)}>Ta bort</button>
         
        </div>
      ))}
        {/* <p>Totalt antal produkter i kundkorgen: {productsInCart.length}</p> */}
        <p>Totalt antal produkter i kundkorgen: {productsInCart.length}</p>
        <p>Total summa: {totalPrice}</p>

      </div>
    
  );
};
export default Cart;
