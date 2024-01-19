import { NavLink } from "react-router-dom";
import { UIContext } from "../../../context/UIContext";
import "./MobileMenu.css";
import { useContext } from "react";


const MobileMenu = () => {
    const { toggleMenuVisibility } = useContext(UIContext)


  return (
    <div>
      <div className="menu-icon">

      </div>
      
        <ul className="mobileMenuList">
          <li>
            <NavLink onClick={toggleMenuVisibility} to="/">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenuVisibility} to="/UserPage">
              Konto
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenuVisibility} to="/News">
              Nyheter
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenuVisibility} to="/Om-oss">
              Om FoodButcher
            </NavLink>
          </li>
        </ul>
      
    </div>
  );
};

export default MobileMenu;
