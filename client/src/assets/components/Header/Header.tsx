// import { Route, Routes } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faNewspaper, faPen, faBars } from '@fortawesome/free-solid-svg-icons'
import "./Header.css";
import logo from '../../food_logga.png';
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { UIContext } from "../../../context/UIContext";
import MobileMenu from '../MobileMenu/MobileMenu';
import PopupMsg from '../PopupMsg/PopupMsg';

const Header = () => {
    
    const { loggedInUser } = useContext(UserContext)
    const { toggleMenuVisibility, isMenuVisible } = useContext(UIContext)
    const { numberInCart } = useContext(CartContext);   
    const { errorMsg } = useContext(UIContext) 





    const currentPath = window.location.pathname
    let path:string;
    switch (currentPath) {
        case "/": path = "Produkter"
            break;
        case "/News": path = "Nyheter"
            break;
        case "/UserPage": path = `Ditt konto ${loggedInUser.firstName ? loggedInUser.firstName : loggedInUser.email }`
            break;
        case "/cart": path = "Kundvagn"
            break;
        case "/product/1": 
        case "/product/2": path = "Produktsida"
            break;
        case "/Admin": path = "Adminpanel"
            break;
        default: path = ""
    }
    
    // Ditt konto {userObject.firstName ? userObject.firstName : loggedInUser.email }
    return (
        <div className="header">

            <FontAwesomeIcon icon={faBars} className='bars' onClick={toggleMenuVisibility} />
            <div className='mobileMenu'>
            {isMenuVisible && <MobileMenu />} 
            </div>

            {errorMsg != "" ? 
            <div className="errorDialog">
                <PopupMsg />
            </div> : "" }

            <Link to={`/`}>
                <img src={logo} alt="Logo" className='imgLogo'/>
            </Link>
            <h1 className='headerPath'>{path}</h1>
            <div className="rightNav">

                <div className='navlinks'>
                {loggedInUser.isAdmin ? 
                <>
                <Link to={"/Admin"}>
                    <FontAwesomeIcon icon={faPen} />
                </Link>
                    <p>Adminpanel</p>
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
            <div className='mobileCart'>
                {numberInCart > 0 ? 
                    <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faCartShopping} />
                        
                        <p className="cartNumber">{numberInCart}</p>
                    </Link>
                        :  
                        <FontAwesomeIcon icon={faCartShopping} />
                        }
                    
            </div>
            <div className='mobileCart'>
                {loggedInUser._id ? 
                    <Link to={"/UserPage"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                     : 
                     <Link to={"/Login"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    }
                    <p className='greetUser'>{loggedInUser._id ? loggedInUser.firstName : "Konto"}</p>
                </div>
        </div>
    );
  };
  export default Header;
  