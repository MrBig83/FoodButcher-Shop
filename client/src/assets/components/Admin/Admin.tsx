import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { OrderContext } from "../../../context/OrderContext";
import AdminViewOrders from "./AdminViewOrders/AdminViewOrders";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import BackBtn from "../Buttons/backBtn";
import "./Admin.css"

const Admin = () => {
  const { adminGetProducts } = useContext(ProductContext)
  const { getAdminOrders } = useContext(OrderContext)

  useEffect(()=>{
    adminGetProducts()
    getAdminOrders()
  }, [])
  
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  function toggleCreatePanel() {
    setToggleCreate(prevState => !prevState);
    setToggleUpdate(false)
    setToggleOrders(false)
  }
  function toggleUpdatePanel() {
    setToggleUpdate(prevState => !prevState);
    setToggleCreate(false)
    setToggleOrders(false)
  }
  function toggleAdminOrders() {
    setToggleOrders(prevState => !prevState);
    setToggleCreate(false)
    setToggleUpdate(false)
  }

  return (
    <div className="admin">
      <div className="adminButtons">
      <BackBtn />
      
      <button className="toggleCreatePanel" onClick={toggleCreatePanel}>Lägg till produkt</button>
      <button className="toggleUpdatePanel" onClick={toggleUpdatePanel}>Uppdatera produkt</button>
      <button className="toggleUpdatePanel" onClick={toggleAdminOrders}>Visa ordrar</button>
      </div>
      {toggleCreate && <CreateProduct />}
      {toggleUpdate && <UpdateProduct />}
      {toggleOrders && <AdminViewOrders />}

    </div>
  );
};

export default Admin;