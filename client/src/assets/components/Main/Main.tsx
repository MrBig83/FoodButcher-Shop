import { Route, Routes } from "react-router";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Main.css"
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import CreateAccount from "../CreateAccount/CreateAccount";

const Main = () => {
  return (
    <div className="main">
      <div className="routes">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>

        {/* <div className="sectionLine"></div> */}

      </div>
    </div>
  );
};
export default Main;
