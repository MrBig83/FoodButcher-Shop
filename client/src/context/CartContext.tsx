import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction, useEffect } from "react";
import IProduct from "../assets/interfaces/IProduct";
// import IProduct from "../assets/interfaces/IProduct";

interface CartContextProps {

    numberInCart: number;
    totalPrice: number;
    setNumberInCart: Dispatch<SetStateAction<number>>;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    addProduct: (product: IProduct) => void;
    decreaseProductCount: (product: IProduct) => void;
    increaseProductCount: (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
    productsInCart: IProduct[];
    setProductsInCart: Dispatch<SetStateAction<IProduct[]>>;
    
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  //States

  const [numberInCart, setNumberInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([])

  
  //Functions
  const addProduct = (product: IProduct) => {     
    setProductsInCart([...productsInCart, product]);    
    setNumberInCart(productsInCart.length)
  };

  const decreaseProductCount = (product: IProduct) => {
    const index = productsInCart.indexOf(product)   
    productsInCart.splice(index, 1)
    countProductsInCart()
    
  }

  const increaseProductCount = (product: IProduct) => {
    setProductsInCart([...productsInCart, product]);   
    countProductsInCart()
    
  }

  const removeProduct = (productToRemove: IProduct) => {
    const result = productsInCart.filter(product => {
      return product.id !== productToRemove.id;
    })

    setProductsInCart(result);  
    countProductsInCart()
    
  }

  const countProductsInCart = () => {
    setNumberInCart(productsInCart.length)
    calculatePriceTotal()
  }

  const calculatePriceTotal = () => {
    let sum = 0;
    for(let i = 0; i < productsInCart.length; i++) {
      sum = sum + productsInCart[i].price;
      
    }
    
    setTotalPrice(sum)
    
  }



  useEffect(() => {
    countProductsInCart()
    
  }, [productsInCart])

  // useEffect(() => {
  //   console.log("Pris");
    
  // }, [totalPrice])

return (
    <CartContext.Provider
      value={{
        numberInCart, 
        totalPrice, 
        setNumberInCart, 
        setTotalPrice,
        addProduct, 
        decreaseProductCount, 
        increaseProductCount, 
        removeProduct, 
        productsInCart, 
        setProductsInCart
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;