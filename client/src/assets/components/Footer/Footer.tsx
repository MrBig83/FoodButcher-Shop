// import { Route, Routes } from "react-router";
import "./Footer.css"

const Footer = () => {
    return (
      <div className="footer">
          <div className="footerDivs">
            <h1>Kundservice</h1>
            <p><p><a href="mailto:hello@foodbutcher.com">hello@foodbutcher.com</a></p></p>
            <p>0707 - 111 111</p>
          </div>
          <div className="footerDivs">
            <h1>Information</h1>
            <p>Försäljningsvillkor</p>
            <p>Returpolicy</p>
            <p>Cookiepolicy</p>
          </div>
          <div className="footerDivs">
            <h1>Om FoodButcher</h1>
            <p>Bla bla</p>
            <p>Bla bla</p>
            <p>Bla bla</p>
          </div>
          <div className="spacerLine"></div>
      </div>
    );
  };
  export default Footer;
  