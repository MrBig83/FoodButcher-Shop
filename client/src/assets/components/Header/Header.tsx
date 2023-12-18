// import { Route, Routes } from "react-router";
import "./Header.css";
import logo from '../../food_logga.png';


const Header = () => {
    return (
        <div className="header">
            
            <img src={logo} alt="Logo" />
            <h1>Header</h1>
            <div className="rightNav">
                <p>Navlinks</p>
                <p>UserIcon</p>
                <p>CartIcon</p>
            </div>
        </div>
    );
  };
  export default Header;
  