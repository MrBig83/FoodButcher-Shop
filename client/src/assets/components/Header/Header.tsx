// import { Route, Routes } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faNewspaper, faPen } from '@fortawesome/free-solid-svg-icons'
import "./Header.css";
import logo from '../../food_logga.png';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Header = () => {
    
    const { loggedInUser } = useContext(UserContext)
    const { numberInCart } = useContext(CartContext);    
 
    return (
        <div className="header">
            <Link to={`/`}>
                <img src={logo} alt="Logo" />
            </Link>
            <h1></h1>
            <div className="rightNav">

                <div className='navlinks'>
                {loggedInUser.isAdmin ? 
                <>
                <Link to={"/Admin"}>
                    <FontAwesomeIcon icon={faPen} />
                </Link>
                    <p>Skapa Produkt</p>
                </>
                : ""}
                </div>

                <div className='navlinks'>
                    <Link to={'/News'}>
                        <FontAwesomeIcon icon={faNewspaper} />
                    </Link>
                    <p>Nyheter</p>
                </div>
                <div className='navlinks'>
                {loggedInUser._id ? 
                    <Link to={"/UserPage"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                     : 
                     <Link to={"/Login"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    }
                    <p className='greetUser'>{loggedInUser._id ? "Välkommen "+loggedInUser.firstName + "!" : "Konto"}</p>
                </div>
                <div className='navlinks'>
                {numberInCart > 0 ? 
                    <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faCartShopping} />
                        
                        <p className="cartNumber">{numberInCart}</p>
                    </Link>
                        :  
                        <FontAwesomeIcon icon={faCartShopping} />
                        }
                    <p className='outLier'>Kungvagn</p>
                    
                </div>
            </div>
        </div>
    );
  };
  export default Header;
  