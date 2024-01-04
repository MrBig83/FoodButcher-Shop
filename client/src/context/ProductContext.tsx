import { createContext, useEffect, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
    productList: IProduct[] | null;
    singleProduct: IProduct | null;
    productObject: IProduct | null;
    getProducts: () => Promise<void>;
    getSingleProduct: (id: number) => Promise<void>;
    setProductList: Dispatch<SetStateAction<IProduct[] | null>>;
    setSingleProduct: Dispatch<SetStateAction<IProduct | null>>;
    setProductObject: Dispatch<SetStateAction<IProduct | null>>;
    createProduct: (productObject: IProduct) => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const ProductContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  //States
  const [productList, setProductList] = useState<IProduct[] | null>(null)
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null)
  // const [productObject, setProductObject] = useState<IProduct | null>(null)
  const [productObject, setProductObject] = useState<IProduct | null>({
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
    quantity: ""
  });
  
  //Functions

  const getProducts = async () => {              
      const res = await fetch("/api/products");
      const products: IProduct[] = await res.json();
      setProductList(products)
  };
  useEffect(() => {  
      getProducts();
  }, []);

  const getSingleProduct = async (id: number) => {              
      const res = await fetch(`/api/products/${id}`);
      const product: IProduct = await res.json();
      setSingleProduct(product)
  };

  const createProduct = async (productObject: IProduct) => {
    console.log(productObject);
    
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        
        id: productObject.id,
        title: productObject.title,
        description: productObject.description,
        usage: productObject.usage,
        suits: productObject.suits,
        ingredients: productObject.ingredients,
        nutritions: productObject.nutritions,
        price: productObject.price,
        image: productObject.image,
        instock: productObject.instock
      }), 
    })
  };

    // const res = await fetch("");
    // const newProduct: IProduct = await res.json();
    // setNAMNPÅSTATE(newProduct) //===============================================================================================
  // }

return (
    <ProductContext.Provider
      value={{
        productList,
        singleProduct,
        productObject,
        getProducts,
        getSingleProduct,
        setProductList,
        setSingleProduct,
        setProductObject,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;