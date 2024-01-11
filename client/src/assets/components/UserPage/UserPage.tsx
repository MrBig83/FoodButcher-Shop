// import { Route, Routes } from "react-router";
import "./UserPage.css"

import { UserContext } from "../../../context/UserContext"
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import IUser from "../../interfaces/IUser";
import IUserData from "../../interfaces/IUserData";




const UserPage = () => {
  const { handleLogout, loggedInUser, getUser, updateUserCreds } = useContext(UserContext);
  
  
  
  const handleSaveCreds = async (userObject: IUserData) => {
    await updateUserCreds(userObject)
    
    
  };
  
  useEffect(() => {
    getUser()
  }, [])

  // console.log(loggedInUser);
  
  const userObject: IUserData = {
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    street: loggedInUser.street,
    postCode: loggedInUser.postCode,
    city: loggedInUser.city,
  }
  
  

  return (
    <div className="UserPage">
        <h1>UserPage</h1>
          <p>Uppdatera kontoinformation för <strong>{loggedInUser.email}</strong></p>
        <div className="updateCredForm">
          <input type="text" placeholder="Förnamn" defaultValue={userObject.firstName} onChange={(e) => userObject.firstName = e.target.value} />
          <input type="text" placeholder="Efternamn" defaultValue={userObject.lastName} onChange={(e) => userObject.lastName = e.target.value} />
          <input type="text" placeholder="Gatuadress" defaultValue={userObject.street} onChange={(e) => userObject.street = e.target.value} />
          <input type="text" placeholder="Postnummer" defaultValue={userObject.postCode} onChange={(e) => userObject.postCode = e.target.value} />
          <input type="text" placeholder="Ort" defaultValue={userObject.city} onChange={(e) => userObject.city = e.target.value} />

          <button onClick={() => handleSaveCreds(userObject)}>Spara</button>
        </div>

        <p>Se Orderhistorik</p>

        <Link to={"/"}>          
          <button onClick={() => handleLogout()}>Logga ut</button>
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
