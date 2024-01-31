import { ProductContext } from "../../../context/ProductContext"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import IProduct from "../../interfaces/IProduct";
import "./Products.css"

const Products = () => {
  const { productList } = useContext(ProductContext);
  
  return (
    <div className="Products">
        
        <div className="productList">
        {productList?.map((product: IProduct) => (     
        <div className="ProductCardRender" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </div>

      ))}
      </div>
    </div>
    
  );
};
export default Products;
