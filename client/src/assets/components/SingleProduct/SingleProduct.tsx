import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import IProduct from "../../interfaces/IProduct";
import BuyNowBtn from "../Buttons/buyNowBtn";
import BackBtn from "../Buttons/backBtn";
import "./SingleProduct.css"

const defaultProduct: IProduct = {
  _id: "",
  id: 0, 
  title: "",
  description: "",
  usage: "", 
  suits: "", 
  ingredients: "", 
  nutritions: "", 
  price: 0,
  image: "",
  instock: 0, 
  quantity: 0, 
  deleted: false
};

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };
    fetchProduct();
  }, []);
      
  return (
    <>  
      <BackBtn />
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
