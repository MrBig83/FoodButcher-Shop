import { Route, Routes } from "react-router";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Main.css"
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import UserPage from "../UserPage/UserPage"
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import News from "../News/News";
import Admin from "../Admin/Admin";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminSingleProduct from "../Admin/AdminSingleProduct/AdminSingleProduct";
import Confirmation from "../Confirmation/Confirmation";

const Main = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <div className="main">
      <div className="routes">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Admin" element={loggedInUser.isAdmin === true ? <Admin /> : <Login />} />
          <Route path="/Admin/:id" element={loggedInUser.isAdmin === true ? <AdminSingleProduct /> : <Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/createproduct" element={loggedInUser.isAdmin === true ? <CreateProduct /> : <Login />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
        </Routes>

        {/* <div className="sectionLine"></div> */}

      </div>
    </div>
  );
};
export default Main;
