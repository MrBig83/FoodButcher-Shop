// import { Route, Routes } from "react-router";
// import "./Products.css"


import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";

// import { useContext } from "react";




const CreateAccount = () => {
//   const { productList } = useContext(ProductContext);
  

  return (
    <div className="CreateAccountPage"> 
    <Link to={`/`}>
      <BackBtn />
    </Link>       
        <div className="CreateAccountForm">
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Önskat lösenord"/>
            <input type="text" placeholder="Repetera lösenord"/>
            <button>Skapa konto</button>

      
        

        </div>
    </div>

    
  );
};
export default CreateAccount;
