import { NavLink } from "react-router-dom";
import { UIContext } from "../../../context/UIContext";
import "./MobileMenu.css";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const MobileMenu = () => {
  const { toggleMenuVisibility } = useContext(UIContext);
  const { loggedInUser, handleLogout } = useContext(UserContext);

  return (
    <div>
      <div className="menu-icon"></div>

      <ul className="mobileMenuList">
        {loggedInUser.isAdmin ? (
          <li>
            <NavLink onClick={toggleMenuVisibility} to="/Admin">
              Adminpanel
            </NavLink>
          </li>
        ) : (
          ""
        )}

        <li>
          <NavLink onClick={toggleMenuVisibility} to="/">
            Shop
          </NavLink>
        </li>
        {loggedInUser.email !== "" ? 
        <li>
          <NavLink onClick={toggleMenuVisibility} to="/UserPage">
            Konto
          </NavLink>
        </li>
        : 
        <li>
          <NavLink onClick={toggleMenuVisibility} to="/login">
            Logga in
          </NavLink>
        </li> }
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
        {loggedInUser.email !== "" ?
        <li>
          <NavLink onClick={() => { handleLogout(); toggleMenuVisibility(); }} to="/">
            Logga ut
          </NavLink>
        </li>
        : "" }
      </ul>
    </div>
  );
};

export default MobileMenu;
