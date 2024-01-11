import { useContext, useEffect } from 'react'
import BackBtn from '../Buttons/backBtn'
// import { CartContext } from "../../../context/CartContext";
import { OrderContext } from "../../../context/OrderContext";

import { IOrderItems } from '../../interfaces/IOrderObject';
import "./Confirmation.css"

function Confirmation() {

    const { fetchOrderConfirm, checkoutObject } = useContext(OrderContext)
    
        // console.log(responseSnippet); //Tom. Variabler nollställs när sidan laddas om. 
        // console.log(productsInCart); //får innehåll ifrån LS. Töm LS och sen productsInCart. Kan funka. 
        const checkoutID:string = localStorage.getItem("FBS-checkout") || ""     

useEffect(()=> {
  fetchOrderConfirm(checkoutID)
}, [])

const listProducts = checkoutObject.items.map((product: IOrderItems) => (
  <div className="ProductCardRender" >

      <li className='checkoutList' key={product.itemId}>
        <p>{product.name}</p>
        <p>{product.quantity}</p>
        <p>{product.unitPrice}:-</p>
        <p>{product.totalPriceIncludingTax}:-</p>
      </li>
      
  </div>
))

  return (
    <>
    <BackBtn />
    <div>Orderbekräftelse: </div>

    <ul className='checkoutUL'>{listProducts}</ul>
    <p className='checkoutTotal'>Totalt (inkl skatt): {checkoutObject.totalPriceIncludingTax}:- </p>
    </>
  )
}

export default Confirmation