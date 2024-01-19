import "./UserPage.css"
import { UserContext } from "../../../context/UserContext"
import { useContext, useEffect, useState } from "react";
import BackBtn from "../Buttons/backBtn";
import UserOrders from "./UserOrders/UserOrders";
import UpdateUser from "./UpdateUser/UpdateUser";

const UserPage = () => {
  const { handleLogout, loggedInUser, getUserOrders } = useContext(UserContext);  

  useEffect(()=> {            
    getUserOrders(loggedInUser._id)
    return () => {
    };
}, [])
    
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
      <div className="topButtons">
        <BackBtn />
        <button onClick={() => handleLogout()}>Logga ut</button>
        <button onClick={toggleUserVisibility}>Updatera adress</button>
        <button onClick={toggleOrderVisibility}>Visa orderhistorik</button>
      </div>
      {isOrdersVisible && <UserOrders />}
      {isUserVisible && <UpdateUser />}
      
    </div>
  );
};
export default UserPage;
