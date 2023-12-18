// import { Route, Routes } from "react-router";
import "./ProductCard.css"

import BuyNowBtn from "../Buttons/buyNowBtn";

const ProductCard = () => {
  return (
    <div className="ProductCard">
        <p className="cardTitle">ProductCard</p>
        <p>Detta ska vara en bild</p>
        <div className="cardBottom">
          <p className="cardPrice">Pris</p>
          <BuyNowBtn />
        </div>
        

      </div>
    
  );
};
export default ProductCard;
