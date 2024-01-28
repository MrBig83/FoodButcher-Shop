import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction, useEffect } from "react";
import IProduct from "../assets/interfaces/IProduct";
import ICartItem from "../assets/interfaces/ICartItem";
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
    cartItem: ICartItem[];
    // setCartItem: Dispatch<SetStateAction<ICartItem[]>>;
    uniqueProducts: IProduct[];
    
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  //States

  const [numberInCart, setNumberInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([])
  const [cartItem, setCartItem] = useState<ICartItem[]>([]); //Sätt localStorage inom paranteserna sen

  const uniqueProducts = Array.from(new Set(productsInCart)) //För att ta bort alla dubletter 
   
console.log("uniqueProducts: ", uniqueProducts);

uniqueProducts.map((singleItem) => {
  const cartObject: ICartItem = {
    product : singleItem, 
    quantity: 1
  }
  setCartItem(cartObject)
  
})


  
  //Functions
  const addProduct = (product: IProduct) => {     
    setProductsInCart([...productsInCart, product]); //Öka istället quantity istället för att bygga ut arrayen. (Om produkten redan finns i cart)
    // setNumberInCart(productsInCart.length) //Räkna ihop summan av quantity istället. Liknande summan av pris enligt nedan.
  };

  const decreaseProductCount = (product: IProduct) => {
    const index = productsInCart.indexOf(product)   
    productsInCart.splice(index, 1)
    countProductsInCart()
    
  }

  const increaseProductCount = (product: IProduct) => {
    setProductsInCart([...productsInCart, product]); //Öka istället quantity istället för att bygga ut arrayen. (Om produkten redan finns i cart)
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
    setNumberInCart(productsInCart.length) //Räkna ihop summan av quantity istället. Liknande summan av pris enligt nedan. 
    calculatePriceTotal()
  }

  const calculatePriceTotal = () => { //Räkna ut summan genom pris*antal per post i arrayen istället. 
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
        setProductsInCart, 
        uniqueProducts, 
        cartItem, 
        setCartItem
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;