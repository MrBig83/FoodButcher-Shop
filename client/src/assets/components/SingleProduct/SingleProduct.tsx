// import { Route, Routes } from "react-router";
import "./SingleProduct.css"

import BuyNowBtn from "../Buttons/buyNowBtn";

const SingleProduct = () => {
  return (
    <div className="SingleProduct">
        <p className="cardTitle">ProduktTitel</p>
        <p>Detta ska vara en bild</p>
        <p>Detta ska vara produktbeskrivning</p>
        <div className="cardBottom">
          <p className="cardPrice">Pris</p>
          <BuyNowBtn />
        </div>
        

      </div>
    
  );
};
export default SingleProduct;
