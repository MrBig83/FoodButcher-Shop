// import { Route, Routes } from "react-router";
// import "./Main.css"

import ProductCard from "../ProductCard/ProductCard";
import IProduct from "../../interfaces/IProduct";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext"
import { useContext } from "react";




const Products = () => {
  const { productList } = useContext(ProductContext);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(`http://localhost:3000/api/products`);
  //     const data = await response.json();

  //     setProducts(data);
      
  //   };
  //   fetchProducts();
  // }, []);

  // useEffect(() => {}, [products]);


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
