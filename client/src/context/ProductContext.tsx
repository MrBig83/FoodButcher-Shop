import { createContext, useEffect, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
    productList: IProduct[] | null;
    adminProductList: IProduct[] | null;
    singleProduct: IProduct | null;
    productObject: IProduct;
    updateObject: IProduct;
    getProducts: () => Promise<void>;
    adminGetProducts: () => Promise<void>;
    getSingleProduct: (id: number) => Promise<void>;
    setProductList: Dispatch<SetStateAction<IProduct[] | null>>;
    setAdminProductList: Dispatch<SetStateAction<IProduct[] | null>>;
    setSingleProduct: Dispatch<SetStateAction<IProduct | null>>;
    createProduct: (productObject: IProduct) => Promise<void>;
    updateProduct: (productObject: IProduct) => Promise<void>;
    initialFormState: IProduct;
    setProductObject: Dispatch<SetStateAction<IProduct>>
    setUpdateObject: Dispatch<SetStateAction<IProduct>>
    deleteProduct: (updateProduct: IProduct) => Promise<void>;

}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const ProductContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  //Initial states
  const initialFormState = {
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

  //States
  const [productList, setProductList] = useState<IProduct[] | null>(null)
  const [adminProductList, setAdminProductList] = useState<IProduct[] | null>(null)
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null)
  
  const [productObject, setProductObject] = useState(initialFormState)
  const [updateObject, setUpdateObject] = useState(initialFormState)

  
  //Functions

  const adminGetProducts = async () => {                    
      const res = await fetch("/api/products/admin");
      const products: IProduct[] = await res.json();      
      setAdminProductList(products)
  };
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
    const response = await fetch("/api/products", {
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
        instock: productObject.instock, 
        deleted: false
      }), 
    })
    const res =  await response.json();
    console.log(res);
    // TODO : Popup som visar att produkten är skapad
    getProducts();
  };

  const updateProduct = async (updateProduct: IProduct) => {    
    const response = await fetch(`/api/products/${updateProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        
        id: updateProduct.id,
        title: updateProduct.title,
        description: updateProduct.description,
        usage: updateProduct.usage,
        suits: updateProduct.suits,
        ingredients: updateProduct.ingredients,
        nutritions: updateProduct.nutritions,
        price: updateProduct.price,
        image: updateProduct.image,
        instock: updateProduct.instock, 
        deleted: updateProduct.deleted
      }), 
    })
    const res =  await response.json();
    console.log(res);
    // TODO : Popup som visar att produkten är uppdaterad
    getProducts();
  }
  const deleteProduct = async (updateProduct: IProduct) => {
    const response = await fetch(`/api/products/${updateProduct._id}`, 
    {
      method: "DELETE"
    })
    const res = await response.json()
    console.log(res);
    // TODO : Popup som visar att produkten är raderad
    getProducts();
  }
  
return (
    <ProductContext.Provider
      value={{
        productList,
        adminProductList,
        singleProduct,
        productObject,
        getProducts,
        adminGetProducts,
        getSingleProduct,
        setProductList,
        setAdminProductList,
        setSingleProduct,
        setProductObject,
        createProduct,
        updateProduct,
        initialFormState, 
        updateObject, 
        setUpdateObject, 
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;