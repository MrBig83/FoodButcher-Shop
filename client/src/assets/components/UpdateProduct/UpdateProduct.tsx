// import { Route, Routes } from "react-router";
import "./UpdateProduct.css"


import { Link } from "react-router-dom";

import IProduct from "../../interfaces/IProduct";
import { ProductContext } from "../../../context/ProductContext"
import { useContext, useEffect } from "react";

import AdminProductCard from "../AdminProductCard/AdminProductCard";

// import { useContext } from "react";




const UpdateProduct = () => {
  const { adminProductList  } = useContext(ProductContext);


  
//Hantera detta som ett stor produktkort istället. 
//Singlepage med editerbara fält? 
//Välja produkt via "vanliga" produktkort. 
//så... kopiera produktsidorna

  return (
  <>
        <div className="Products">
        {/* <h1>Products</h1> */}
        
        {adminProductList?.map((product: IProduct) => (
        <div className="ProductCardRender" key={product.id}>
          <Link to={`/Admin/${product.id}`}>
            <AdminProductCard product={product} />
          </Link>
        </div>
          
      ))}
      
        

      </div>
    

  </>

    
  );
};
export default UpdateProduct;
