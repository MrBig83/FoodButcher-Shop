// import { Route, Routes } from "react-router";
import "./Header.css";
import logo from '../../food_logga.png';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const { productsInCart } = useContext(CartContext);
 


    return (
        <div className="header">
            <Link to={`/`}>
                <img src={logo} alt="Logo" />
            </Link>
            <h1>Header</h1>
            <div className="rightNav">
                <p>Produkter</p>
                <p>Nyheter</p>
                <p>UserIcon</p>
                <Link to={"/cart"}>
                    <p>CartIcon</p>
                    <p className="cartNumber">{productsInCart.length}</p>
                </Link>
            </div>
        </div>
    );
  };
  export default Header;
  