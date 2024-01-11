import "./Cart.css"
import CartProductCard from "../CartProductCard/CartProductCard"


import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import BackBtn from "../Buttons/backBtn";
import ICartItem from "../../interfaces/ICartItem";


const Cart = () => {
  const { productsInCart, decreaseProductCount, 
      increaseProductCount, removeProduct, 
      totalPrice, numberInCart, 
      proceedToCheckout, responseSnippet, 
      setResponseSnippet 
    } = useContext(CartContext);
  
  const uniqueProducts = Array.from(new Set(productsInCart)) //För att ta bort alla dubletter 

  console.log(responseSnippet);
  function closeFrame() {
    setResponseSnippet("")
    localStorage.setItem("FBS-checkout", "")
  }
  

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
            <div>
              <button onClick={() => decreaseProductCount(product)}>Minska</button>
              <button onClick={() => increaseProductCount(product)}>Öka</button>
              <button onClick={() => removeProduct(product)}>Ta bort</button>
            </div>
         
        </div>
      ))}
      <div>
      <button onClick={() => proceedToCheckout(uniqueProducts)}>Gå vidare</button>
      {/* <Checkout /> */}
        <p>Totalt antal produkter i kundkorgen: {numberInCart}</p>
        <p>Total summa: {totalPrice}</p>
        </div>

        {responseSnippet ? 
          <>
            <div className="closeIframe" onClick={() => closeFrame()}>
            <p>X</p>
            </div>
            <iframe className="iFrame" src={responseSnippet} title="Third Party Site" width="80%" height="500px" /> 
          </> 
        : ""}

      </div>
    
  );
};
export default Cart;
