// import { Route, Routes } from "react-router";
import "./SingleProduct.css"

import BuyNowBtn from "../Buttons/buyNowBtn";
import BackBtn from "../Buttons/backBtn";
import { Link, useParams } from "react-router-dom";
// import { ProductContext } from "../../../context/ProductContext"
import { useEffect, useState} from "react";
import IProduct from "../../interfaces/IProduct";

const defaultProduct: IProduct = {
  id: "", 
  title: "",
  description: "",
  usage: "", 
  suits: "", 
  ingredients: "", 
  nutritions: "", 
  price: 0,
  image: "",
  instock: 0, 
  quantity: ""
};


const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const { id } = useParams();
  // const { productList, singleProduct } = useContext(ProductContext);
  

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [product, id]);
      
  return (
    <>
    <Link to={`/`}>
      <BackBtn />
    </Link>
    <div className="SingleProduct">
      <p className="productTitle">{product!.title}</p>
      <img className="productImage" src={product!.image} alt="" />
      <div className="productInfo">
        <p>{product!.description}</p>
        <p><strong>Använding:</strong> {product!.usage}</p>
        <p><strong>Passar till:</strong> {product!.suits}</p>
        <p><strong>Innehåll:</strong> {product!.ingredients}</p>
        <p><strong>Näringsinnehåll per 100g:</strong> {product!.nutritions}</p>
      </div>
      <div className="productBottom">
        <p className="productPrice">{product!.price}:-</p>
        <BuyNowBtn product={product} />
      </div>
        

    </div>
    </>
  );
};
export default SingleProduct;
