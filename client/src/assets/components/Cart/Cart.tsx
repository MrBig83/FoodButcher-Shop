import "./Cart.css"
import CartProductCard from "../CartProductCard/CartProductCard"
import  {faTrashCan } from '@fortawesome/free-regular-svg-icons'

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import BackBtn from "../Buttons/backBtn";
import ICartItem from "../../interfaces/ICartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { productsInCart, decreaseProductCount, 
      increaseProductCount, removeProduct, 
      totalPrice, numberInCart, 
      proceedToCheckout, responseSnippet, 
      setResponseSnippet 
    } = useContext(CartContext);
  
  const uniqueProducts = Array.from(new Set(productsInCart)) 

  function closeFrame() {
    setResponseSnippet("")
    localStorage.setItem("FBS-checkout", "")
  }
  
  return (  
    <div className="products">
      <div className="cartTop">
        <BackBtn />
        <div className="cartSum">
          {numberInCart ? <>
          <p>Antal varor: {numberInCart}</p>
          <p>Frakt (PostNord): 100:-</p>
          <p>Summa: {totalPrice + 100}:-</p>
          <button onClick={() => proceedToCheckout(uniqueProducts)}>Till betalning</button>
          </> : "" }
        </div>
      </div>
      
      <div className="productCardsList">
        {uniqueProducts?.map((product: ICartItem) => (
          <div className="ProductCardRender" key={product.product.id} >
        
            <CartProductCard 
              key={product.product.id}
              product={product.product} 
            />
            <div className="productCartButtons">
            <p>Antal: {product.quantity}</p>
              <button onClick={() => decreaseProductCount(product)}>-</button>
              <button onClick={() => increaseProductCount(product)}>+</button>
              <button className="spezial" onClick={() => removeProduct(product)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
          
          </div>
        ))}
      </div>  
      

        {responseSnippet ? 
          <div className="iFrameContainer">
            <div className="closeIframe" onClick={() => closeFrame()}>
            <p>X</p>
            </div>
            <iframe className="iFrame" src={responseSnippet} title="Third Party Site" width="80%" height="750px" /> 
          </div> 
        : ""}
      </div>
  );
};
export default Cart;
