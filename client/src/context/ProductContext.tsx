import { createContext, useEffect, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
    productList: IProduct[] | null;
    singleProduct: IProduct | null;
    getProducts: () => Promise<void>;
    getSingleProduct: (id: number) => Promise<void>;
    setProductList: Dispatch<SetStateAction<IProduct[] | null>>;
    setSingleProduct: Dispatch<SetStateAction<IProduct | null>>;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const ProductContextProvider = ({ children }: PropsWithChildren<Record<string, never>>) => {

  //States
  const [productList, setProductList] = useState<IProduct[] | null>(null)
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null)
  
  //Functions

  const getProducts = async () => {              
      const res = await fetch("http://localhost:3000/api/products");
      const products: IProduct[] = await res.json();
      setProductList(products)
  };
  useEffect(() => {  
      getProducts();
  }, []);

  const getSingleProduct = async (id: number) => {              
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      const product: IProduct = await res.json();
      setSingleProduct(product)
  };

return (
    <ProductContext.Provider
      value={{
        productList,
        singleProduct,
        getProducts,
        getSingleProduct,
        setProductList,
        setSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;