import "./UpdateProduct.css"
import { Link } from "react-router-dom";
import IProduct from "../../interfaces/IProduct";
import { ProductContext } from "../../../context/ProductContext"
import { useContext } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";

const UpdateProduct = () => {
  const { adminProductList  } = useContext(ProductContext);

  return (
  <>
    <div className="Products">
        
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
