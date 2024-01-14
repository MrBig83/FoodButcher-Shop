// import { Route, Routes } from "react-router";
import "./UserPage.css"

import { UserContext } from "../../../context/UserContext"
// import { OrderContext } from "../../../context/OrderContext"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import IUser from "../../interfaces/IUser";
import IUserData from "../../interfaces/IUserData";




const UserPage = () => {
  const { handleLogout, loggedInUser, updateUserCreds, userOrders } = useContext(UserContext);
  // const {  } = useContext(OrderContext);
  // const userId = loggedInUser._id;

  console.log(userOrders); 
  
  
  
  
  const handleSaveCreds = async (userObject: IUserData) => {
    await updateUserCreds(userObject)
    
  };
    
  const userObject: IUserData = {
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    street: loggedInUser.street,
    postCode: loggedInUser.postCode,
    city: loggedInUser.city,
  }
  const [isOrdersVisible, setIsOrdersVisible] = useState(false);
  const toggleOrderVisibility = () => {
    setIsOrdersVisible(!isOrdersVisible);
  };
  const [isUserVisible, setIsUserVisible] = useState(false);
  const toggleUserVisibility = () => {
    setIsUserVisible(!isUserVisible);
  };

  

  return (
    <div className="UserPage">
        <h1>UserPage</h1>
          <button onClick={() => handleLogout()}>Logga ut</button>
          <button onClick={toggleUserVisibility}>Updatera adress</button>
        <div id="updateCredForm" className={`content ${isUserVisible ? 'active' : ''}`}>
          <p>Uppdatera kontoinformation för <strong>{loggedInUser.email}</strong></p>
          <input type="text" placeholder="Förnamn" defaultValue={userObject.firstName} onChange={(e) => userObject.firstName = e.target.value} />
          <input type="text" placeholder="Efternamn" defaultValue={userObject.lastName} onChange={(e) => userObject.lastName = e.target.value} />
          <input type="text" placeholder="Gatuadress" defaultValue={userObject.street} onChange={(e) => userObject.street = e.target.value} />
          <input type="text" placeholder="Postnummer" defaultValue={userObject.postCode} onChange={(e) => userObject.postCode = e.target.value} />
          <input type="text" placeholder="Ort" defaultValue={userObject.city} onChange={(e) => userObject.city = e.target.value} />

          <button onClick={() => handleSaveCreds(userObject)}>Spara</button>
        </div>

        <p>Din Orderhistorik</p>
        {/* <div className="deliveryAddressBox"> */}
                {/* <p>Leveransadress:</p>
                <p>{currentOrder?.customer.firstName} {currentOrder?.customer.lastName}</p>
                <p>{currentOrder?.customer.street}</p>
                <p>{currentOrder?.customer.postalCode}</p>
                <p>{currentOrder?.customer.city}</p> */}
            {/* </div> */}
                <button onClick={toggleOrderVisibility}>Visa orderhistorik</button>
                <div className={`content ${isOrdersVisible ? 'active' : ''}`}>
                <p>Varor:</p>
                <table className="orderTable">
                    <thead>
                        <tr>
                        <th>Datum: </th>
                        <th>Ordernummer: </th>
                        <th>Status: </th>
                        <th>Produkt: </th>
                        <th>Antal: </th>
                        <th>Pris per st.:</th>
                        <th>Totalt: </th>
                        </tr>
                    </thead>

                    {userOrders?.map((userOrder) => (
                      <tbody key={userOrder.purchaseId}>
                        <tr>
                          <td>{new Date(userOrder.history.created).toLocaleString()}</td>
                          <td>{userOrder.purchaseId}</td>
                          <td>{userOrder.status} </td>
                        </tr>
                        {userOrder.order.items?.map((userOrderItem) => (
                          <tr key={userOrderItem.itemId}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{userOrderItem.name}</td>
                            <td>{userOrderItem.quantity}</td>
                            <td>{userOrderItem.unitPrice}:-</td>
                            <td>{userOrderItem.totalPriceIncludingTax}:-</td>
                        </tr>
                        ))}
                        <tr className="lastRow">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="txtTotalt">Totalt:</td>
                        <td className="txtSum">{userOrder?.order.totalPriceIncludingTax}:-</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>


        <Link to={"/"}>          
        </Link>
          
        


        {/* <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email} />
         */}
          {/* firstName: "",
          lastName: "",
          email: "",
          street: "",
          postCode: "",
          city: "", */}
              

      </div>
    
  );
};
export default UserPage;
