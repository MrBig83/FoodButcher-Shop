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
import About from "../About/About"
import News from "../News/News";
import Admin from "../Admin/Admin";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminSingleProduct from "../Admin/AdminSingleProduct/AdminSingleProduct";
import Confirmation from "../Confirmation/Confirmation";
import CookiePolicy from "../Legal/CookiePolicy/CookiePolicy";
import SellingTerms from "../Legal/SellingTerms/SellingTerms";
import DataskyddsPolicy from "../Legal/DataskyddsPolicy/DataskyddsPolicy";

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
          <Route path="/Om-oss" element={<About />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Admin" element={loggedInUser.isAdmin === true ? <Admin /> : <Login />} />
          <Route path="/Admin/:id" element={loggedInUser.isAdmin === true ? <AdminSingleProduct /> : <Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/createproduct" element={loggedInUser.isAdmin === true ? <CreateProduct /> : <Login />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/sellingterms" element={<SellingTerms />} />
          <Route path="/dataskyddspolicy" element={<DataskyddsPolicy />} />
        </Routes>
      </div>
    </div>
  );
};
export default Main;
