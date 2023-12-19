import { createContext, useEffect, useState, PropsWithChildren } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
    productList: IProduct[] | null;
    // getProducts: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

const ProductContextProvider = ({ children }: PropsWithChildren) => {
    const [productList, setProductList] = useState([])

    const getProducts = async () => {        
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
        // getProducts

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;