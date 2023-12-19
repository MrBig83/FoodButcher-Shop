// import { Route, Routes } from "react-router";
import "./ProductCard.css"

import BuyNowBtn from "../Buttons/buyNowBtn";
import IProduct from "../../interfaces/IProduct";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="ProductCard">
        <p className="cardTitle">{product.title}</p>
        <img className="cardImage" src={product.image} alt="" />
        <p className="cardDescription">{product.description}</p>
        <div className="cardBottom">
          <p className="cardPrice">{product.price}:-</p>
          <BuyNowBtn />
        </div>
        

      </div>
    
  );
};
export default ProductCard;
