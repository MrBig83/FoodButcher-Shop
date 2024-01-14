import "./Confirmation.css"
import React, { useContext, useEffect } from 'react'
import { OrderContext } from "../../../context/OrderContext";
import BackBtn from "../Buttons/backBtn";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../../context/UserContext";


function Confirmation() {
    console.log("Confirmation-sidan visas");
    
    const { getCurrentOrder, currentOrder } = useContext(OrderContext);
    // const { loggedInUser } = useContext(UserContext);

    
    useEffect(()=> {        
        getCurrentOrder()
        return () => {
        };
    }, [])
    

    // const navigate = useNavigate()
    // if(!currentOrderId) {
    //     navigate("/")
    // }
    // console.log(currentOrderId);
    
    // const navigate = useNavigate()
    // if(currentOrderId){
    //     navigate("/Confirmation") 
    // } else {
    //     navigate
    // }


  return (
    <div>
        <BackBtn />
        <div className="confirmationInfo">
            
            <p>Orderbekräftelse:</p>
            <div className="deliveryAddressBox">
                <p>Leveransadress:</p>
                <p>{currentOrder?.customer.firstName} {currentOrder?.customer.lastName}</p>
                <p>{currentOrder?.customer.street}</p>
                <p>{currentOrder?.customer.postalCode}</p>
                <p>{currentOrder?.customer.city}</p>
            </div>
            <div>
                <p>Varor:</p>
                <table className="confirmationTable">
                    <thead>
                        <tr>
                        <th>Produkt: </th>
                        <th>Antal: </th>
                        <th>Pris per st.:</th>
                        <th>Totalt: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrder?.order.items.map((currentItem) => (
                        <tr key={currentItem.itemId}>
                            <td>{currentItem.name}</td>
                            <td>{currentItem.quantity}</td>
                            <td>{currentItem.unitPrice}:-</td>
                            <td>{currentItem.totalPriceIncludingTax}:-</td>
                        </tr>
                        ))}
                        <tr>
                        <td></td>
                        <td></td>
                        <td className="txtTotalt">Totalt:</td>
                        <td className="txtSum">{currentOrder?.order.totalPriceIncludingTax}:-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Confirmation