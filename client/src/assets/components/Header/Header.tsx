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
    const { toggleMenuVisibility, isMenuVisible, errorMsg } = useContext(UIContext)
    const { numberInCart } = useContext(CartContext);   
    





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
        case "/sellingterms": path = "Försäljningsvillkor"
            break;
        case "/dataskyddsPolicy": path = "Dataskyddspolicy"
            break;
        case "/cookiepolicy": path = "Cookiepolicy"
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

                {loggedInUser.isAdmin ? 
                <Link to={"/Admin"}>
                    
                <div className='navlinks'>
                    <FontAwesomeIcon icon={faPen} />
                    <p>Adminpanel</p>
                </div>
                </Link>
                
                : ""}



                    <Link to={'/News'}>
                <div className='navlinks'>
                        <FontAwesomeIcon className="emilia" icon={faNewspaper} />
                    <p>Nyheter</p>
                </div>
                    </Link>




                {loggedInUser._id ? 
                    <Link to={"/UserPage"}>
                <div className='navlinks'>
                        <FontAwesomeIcon icon={faUser} />
                        <p className='greetUser'>{"Välkommen "+loggedInUser.firstName + "!"}</p>
                    </div>
                    </Link>
                     : 
                     <Link to={"/Login"}>
                <div className='navlinks'>
                        <FontAwesomeIcon icon={faUser} />
                        <p className='greetUser'>{"Konto"}</p>
                </div>
                    </Link>
                    }
                    

                <div className='navlinks'>
                {numberInCart > 0 ? 
                    <Link to={"/cart"}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p className="cartNumber">{numberInCart}</p>
                    </Link>
                :  
                    <FontAwesomeIcon icon={faCartShopping} />
                }
                <p >Kungvagn</p>
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
  