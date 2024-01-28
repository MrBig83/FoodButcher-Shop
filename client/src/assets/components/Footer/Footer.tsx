// import { Route, Routes } from "react-router";
import {  } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div className="footer">
          <div className="footerDivs">
            <h1>Kundservice</h1>
            <p><a href="mailto:hello@foodbutcher.com">hello@foodbutcher.com</a></p>
            <p>0707 - 12 69 99</p>
          </div>
          <div className="footerDivs">
            <h1>Social media</h1>
            <p><a target='_blank' href="https://instagram.com/_foodbutcher"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></p>
            <p><a target='_blank' href="https://youtube.com/@foodbutcher"><FontAwesomeIcon icon={faYoutube} /> Youtube</a></p>
            <p><a target='_blank' href="https://facebook.com/FoodButcher/"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
            
          </div>
          <div className="footerDivs">
            <h1>Information</h1>
            <Link to="/sellingterms"><p>Försäljningsvillkor</p></Link>
            
            
            <Link to="/dataskyddsPolicy"><p>Dataskyddspolicy</p></Link>
            <Link to="/cookiepolicy"><p>Cookiepolicy</p></Link>
          </div>
          <div className="spacerLine"></div>
      </div>
    );
  };
  export default Footer;
  