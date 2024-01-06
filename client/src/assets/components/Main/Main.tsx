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
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Main = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <div className="main">
      <div className="routes">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/UserPage" element={<UserPage />} />
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
