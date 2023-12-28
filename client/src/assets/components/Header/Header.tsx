// import { Route, Routes } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'
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
                {data.isAdmin ? 
                <Link to={"/CreateProduct"}>
                    <p>Skapa Produkt</p>
                </Link>
                : ""}
                <Link to={"/"}>
                    <p>Produkter</p>
                </Link>
                <FontAwesomeIcon icon={faNewspaper} />
                
                <Link to={"/Login"}>
                    <FontAwesomeIcon icon={faUser} />
                <p>{data._id ? "Välkommen "+data.firstName + "!" : ""}</p>
                </Link>
                <Link to={"/cart"}>
                <FontAwesomeIcon icon={faCartShopping} />
                    <p className="cartNumber">{productsInCart.length}</p>
                </Link>
            </div>
        </div>
    );
  };
  export default Header;
  