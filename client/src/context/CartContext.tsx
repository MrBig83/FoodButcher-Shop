import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";
import IProduct from "../assets/interfaces/IProduct";
// import IProduct from "../assets/interfaces/IProduct";

interface CartContextProps {

    numberInCart: number;
    setNumberInCart: Dispatch<SetStateAction<number>>;
    addProduct: (product: IProduct) => void;
    productsInCart: IProduct[];
    
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  //States

  const [numberInCart, setNumberInCart] = useState(0);
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([])

  
  //Functions
  const addProduct = (product: IProduct) => {    
    console.log(product);
    setProductsInCart([...productsInCart, product]);
    console.log(productsInCart);
    
    
    setNumberInCart(productsInCart.length)
};



return (
    <CartContext.Provider
      value={{
        numberInCart, 
        setNumberInCart, 
        addProduct, 
        productsInCart
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;