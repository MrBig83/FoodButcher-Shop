// import { Route, Routes } from "react-router";
import { useContext, useEffect, useState } from "react";

import BackBtn from "../Buttons/backBtn";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";



import "./Admin.css"
import { ProductContext } from "../../../context/ProductContext";

// import { Link } from "react-router-dom";
// import { useContext } from "react";


const Admin = () => {
  // const { loggedInUser } = useContext(UserContext)
  const { adminGetProducts } = useContext(ProductContext)

  useEffect(()=>{
    adminGetProducts()
  }, [])
  
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  function toggleCreatePanel() {
    setToggleCreate(prevState => !prevState);
  }
  function toggleUpdatePanel() {
    setToggleUpdate(prevState => !prevState);
  }

  return (
    <div className="admin">
      <BackBtn />
      <h1>Admin dashboard</h1>
      <button className="toggleCreatePanel" onClick={toggleCreatePanel}>Lägg till produkt</button>
      <button className="toggleUpdatePanel" onClick={toggleUpdatePanel}>Uppdatera produkt</button>
      
      {toggleCreate && <CreateProduct />}
      {toggleUpdate && <UpdateProduct />}
      {/* <Routes>
        <Route path="/Admin/:id" element={loggedInUser.isAdmin === true ? <AdminSingleProduct /> : <Login />} />
      </Routes> */}
    </div>
  );
};

export default Admin;