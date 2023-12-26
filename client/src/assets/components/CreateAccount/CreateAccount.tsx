// import { Route, Routes } from "react-router";
// import "./Products.css"


import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";

import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";




const CreateAccount = () => {
const { email, setEmail, password, setPassword, handleCreateAccount, setVerPassword, verPassword } = useContext(UserContext);

function processInput() {  
 if(password === verPassword) {  
    handleCreateAccount()
 } else {
  console.log("Lösenorden stämmer inte överrens");
  
  //Lösenorden stämmer inte överens
 }

  
}
  

  return (
    <div className="CreateAccountPage"> 
    <Link to={`/`}>
      <BackBtn />
    </Link>       
        <div className="CreateAccountForm">
            <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email}/>
            <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Önskat lösenord" value={password}/>
            <input onChange={(e) => setVerPassword(e.target.value)} className="verPassword" type="text" placeholder="Önskat lösenord" value={verPassword}/>
            <button onClick={() => processInput()}>Skapa konto</button>

        

        </div>
    </div>

    
  );
};
export default CreateAccount;
