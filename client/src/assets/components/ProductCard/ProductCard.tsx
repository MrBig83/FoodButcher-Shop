// import { Route, Routes } from "react-router";
import "./ProductCard.css"

import BuyNowBtn from "../Buttons/buyNowBtn";
import IProduct from "../../interfaces/IProduct";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="ProductCard">
        <p className="cardTitle">{product.title}</p>
        <p>Detta ska vara en bild</p>
        <div className="cardBottom">
          <p className="cardPrice">Pris</p>
          <BuyNowBtn />
        </div>
        

      </div>
    
  );
};
export default ProductCard;
