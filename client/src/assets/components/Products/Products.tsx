// import { Route, Routes } from "react-router";
import "./Products.css"

import ProductCard from "../ProductCard/ProductCard";
import IProduct from "../../interfaces/IProduct";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext"
import { useContext } from "react";




const Products = () => {
  const { productList } = useContext(ProductContext);
  

  return (
    <div className="Products">
        <h1>Products</h1>
        
        {productList?.map((product: IProduct) => (
        <div className="ProductCardRender" key={product.id}>
          <Link to={`/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </div>
          
      ))}
      
        

      </div>
    
  );
};
export default Products;
