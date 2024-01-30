import "./UserPage.css"
import { UserContext } from "../../../context/UserContext"
import { useContext, useEffect, useState } from "react";
import BackBtn from "../Buttons/backBtn";
import UserOrders from "./UserOrders/UserOrders";
import UpdateUser from "./UpdateUser/UpdateUser";

const UserPage = () => {
  const { handleLogout, loggedInUser, getUserOrders } = useContext(UserContext);  
  const [isOrdersVisible, setIsOrdersVisible] = useState(false);
  const [isUserVisible, setIsUserVisible] = useState(false);

  useEffect(()=> {            
    getUserOrders(loggedInUser._id)
    return () => {
    };
}, [])
    
  function toggleUserVisibility() {
    setIsUserVisible(!isUserVisible);
    setIsOrdersVisible(false)
  }
  const toggleOrderVisibility = () => {
    setIsOrdersVisible(!isOrdersVisible);
    setIsUserVisible(false)
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
