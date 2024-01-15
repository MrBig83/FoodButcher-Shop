import "./Confirmation.css"
import { useContext, useEffect } from 'react'
import { OrderContext } from "../../../context/OrderContext";
// import { ProductContext } from "../../../context/ProductContext";
import BackBtn from "../Buttons/backBtn";
// import IProduct from "../../interfaces/IProduct";
// import { IOrder } from "../../interfaces/IOrderObject";
// import UpdateProduct from "../UpdateProduct/UpdateProduct";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../../context/UserContext";


function Confirmation() {
    console.log("Confirmation-sidan visas");
    
    const { getCurrentOrder, currentOrder } = useContext(OrderContext);
    // const { updateProduct, productList } = useContext(ProductContext);
    // const { loggedInUser } = useContext(UserContext);

    
 
    
    useEffect(()=> {        
        getCurrentOrder()
        console.log("Test i confirmation");
        // reduceInStock(productList, currentOrder)
        
        return () => {
        };
    }, [])


    // const reduceInStock = (productList:IProduct[], currentOrder:IOrder) => {
    //     console.log("TEST");
        
    //     console.log(productList);
    //     console.log(currentOrder.order.items);
        
        
        
    //     //Hämta saldo ifrån productlist
    //     //Reducera saldo uifrån order
    //     //Kör Updateproduct med den uppdaterade produkten. 
    //     //Gör om för nästa produkt i ordern. 
    //   }
    


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