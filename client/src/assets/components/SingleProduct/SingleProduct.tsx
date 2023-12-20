// import { Route, Routes } from "react-router";
import "./SingleProduct.css"

import BuyNowBtn from "../Buttons/buyNowBtn";
import BackBtn from "../Buttons/backBtn";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext"
import { useContext} from "react";




const SingleProduct = () => {

  const { id } = useParams();
  const { productList } = useContext(ProductContext);
  


  
  
  
  
  const specProduct = (productList?.findIndex(x => x.id == id));
    
  return (
    <>
    <Link to={`/`}>
      <BackBtn />
    </Link>
    <div className="SingleProduct">
      <p className="productTitle">{productList![specProduct!].title}</p>
      <img className="productImage" src={productList![specProduct!].image} alt="" />
      <div className="productInfo">
        <p>{productList![specProduct!].description}</p>
        <p><strong>Använding:</strong> {productList![specProduct!].usage}</p>
        <p><strong>Passar till:</strong> {productList![specProduct!].suits}</p>
        <p><strong>Innehåll:</strong> {productList![specProduct!].ingredients}</p>
        <p><strong>Näringsinnehåll per 100g:</strong> {productList![specProduct!].nutritions}</p>
      </div>
      <div className="productBottom">
        <p className="productPrice">{productList![specProduct!].price}:-</p>
        <BuyNowBtn />
      </div>
        

    </div>
    </>
  );
};
export default SingleProduct;
