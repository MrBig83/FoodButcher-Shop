import { createContext, useEffect, useState, PropsWithChildren } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
    productList: IProduct[] | null;
    getProducts: () => Promise<void>;
    setProductList: React.Dispatch<React.SetStateAction<never[]>>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

const ProductContextProvider = ({ children }: PropsWithChildren) => {

  //States
  const [productList, setProductList] = useState([])

  //Functions

  const getProducts = async () => {     
      console.log("Get products");
         
      const res = await fetch("http://localhost:3000/api/products");
      const products = await res.json();
      console.log(products);
      
      setProductList(products)
  };
  useEffect(() => {  
      getProducts();
  }, []);


return (
    <ProductContext.Provider
      value={{
        productList,
        getProducts, 
        setProductList

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;