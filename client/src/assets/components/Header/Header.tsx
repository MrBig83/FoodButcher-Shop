// import { Route, Routes } from "react-router";
import "./Header.css";
import logo from '../../food_logga.png';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";


const Header = () => {
    
    const { data } = useContext(UserContext)
    const { productsInCart } = useContext(CartContext);
 


    return (
        <div className="header">
            <Link to={`/`}>
                <img src={logo} alt="Logo" />
            </Link>
            <h1>Header</h1>
            <div className="rightNav">
                <Link to={"/"}>
                    <p>Produkter</p>
                </Link>
                <p>Nyheter</p>
                <Link to={"/Login"}>
                    <p>UserIcon</p>
            <p>{data._id ? "Välkommen "+data.firstName + "!" : "INTE inloggad"}</p>
                </Link>
                <Link to={"/cart"}>
                    <p>CartIcon</p>
                    <p className="cartNumber">{productsInCart.length}</p>
                </Link>
            </div>
        </div>
    );
  };
  export default Header;
  