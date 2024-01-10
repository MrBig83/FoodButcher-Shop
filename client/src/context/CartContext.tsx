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
    decreaseProductCount: (product: ICartItem) => void;
    increaseProductCount: (product: ICartItem) => void;
    proceedToCheckout: (uniqueProducts: ICartItem[]) => void;
    removeProduct: (product: ICartItem) => void;
    productsInCart: ICartItem[];
    checkItem: (item: ICartItem) => boolean;
    // setProductsInCart: Dispatch<SetStateAction<IProduct[]>>;
    
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("FBS-cart") || "[]");

  //States

  const [numberInCart, setNumberInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState<ICartItem[]>([]) //cartFromLocalStorage

  
  //Functions
  useEffect(()=> {
    setProductsInCart(cartFromLocalStorage)
  }, [])

  useEffect(()=> {
    updateLS(productsInCart) 
    countProductsInCart()
  }, [productsInCart])


  const addProduct = (product: IProduct) => {
    const item: ICartItem = {
      product: product,
      quantity: 1,
    };
    addItem(item);
  };
  
  const checkItem = (item: ICartItem) => {
    const itemExistsInCart = productsInCart.some(cartItem => cartItem.product.id === item.product.id);
    return itemExistsInCart;
  };

  const addItem = (item: ICartItem) => {
    if(checkItem(item)){
      console.log("Addera 1"); // TODO : Ta bort
      productsInCart.map((itemInCart) => {
        if(itemInCart.product.id === item.product.id) {
          itemInCart.quantity = itemInCart.quantity +1;
          countProductsInCart()
          updateLS(productsInCart) 
        }
      })
    } else {
      console.log("Lägg till produkt"); // TODO : Ta bort
      setProductsInCart([...productsInCart, item])
      countProductsInCart()
      updateLS(productsInCart) 
    }
  console.log(productsInCart); // TODO : Ta bort
}

const updateLS = (productsInCart: ICartItem[]) => {
  console.log("Uppdatera LS"); //TODO : Ta bort  
  localStorage.setItem("FBS-cart", JSON.stringify(productsInCart));
}

  const decreaseProductCount = (item: ICartItem) => {
    if(checkItem(item)){
      console.log("Subtrahera 1"); // TODO : Ta bort
      productsInCart.map((itemInCart) => {
        if(itemInCart.product.id === item.product.id) {
          if(itemInCart.quantity > 1) {
            itemInCart.quantity = itemInCart.quantity -1;
            countProductsInCart()
            updateLS(productsInCart) 
          } else {
            console.log("Ta bort produkten");
            removeProduct(item)
            // countProductsInCart()
          }
        }      
      })
    } 
  }
  

  const increaseProductCount = (item: ICartItem) => {
    addItem(item)
  }

  const removeProduct = (item: ICartItem) => {
    const result = productsInCart.filter(product => {
      return product.product.id !== item.product.id;
    })
    setProductsInCart(result);  
    countProductsInCart()
    
  }

  const countProductsInCart = () => {
    let totalAmmount = 0;
    productsInCart.map((itemInCart) => {
      totalAmmount = totalAmmount + itemInCart.quantity
    })
    setNumberInCart(totalAmmount)
    console.log(totalAmmount);
    
    calculatePriceTotal()
  }

  const calculatePriceTotal = () => {
    let sum = 0;
    productsInCart.map((itemInCart) => {
      sum = sum + (itemInCart.product.price * itemInCart.quantity)
    })
    setTotalPrice(sum)
}

const proceedToCheckout = async (uniqueProducts: ICartItem[]) => {

interface IPostArray  {
  name: string;
  unitPrice: number,
  quantity: number,
  taxRate: number
}
const postArray: IPostArray[] = [];

function addObject(itemInCart: ICartItem) {
  const newObj: IPostArray = {
      name: itemInCart.product.title,
      unitPrice: itemInCart.product.price, 
      quantity: itemInCart.quantity, 
      taxRate: 0.25
  };
  postArray.push(newObj);
}

uniqueProducts.map((itemInCart) => {
  addObject(itemInCart);
})

const response = await fetch("/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    "merchant":{
      "checkoutUri":"https://www.examplestore.com/checkout.php",
      "confirmationUri":"https://www.examplestore.com/confirmation.php",
      "notificationUri":"https://www.examplestore.com/notification.php",
      "termsUri":"https://www.examplestore.com/terms.php"
    },
    "order":{
      "currency":"sek",
      "items": postArray
    }

  }), 
})
const res =  await response.json();
console.log(res);
}

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
        checkItem,
        proceedToCheckout,
        // setProductsInCart
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;