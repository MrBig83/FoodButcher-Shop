import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction, useEffect, useContext } from "react";
import IProduct from "../assets/interfaces/IProduct";
import ICartItem from "../assets/interfaces/ICartItem";
import { UserContext } from "../context/UserContext";
import { UIContext } from "./UIContext";



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
    responseSnippet: string;
    setResponseSnippet: Dispatch<SetStateAction<string>>
    setProductsInCart: Dispatch<SetStateAction<ICartItem[]>>;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("FBS-cart") || "[]");
  const { loggedInUser } = useContext(UserContext);
  const { setErrorMsg } = useContext(UIContext)

  //States
  const [numberInCart, setNumberInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState<ICartItem[]>([]) //cartFromLocalStorage
  const [responseSnippet, setResponseSnippet] = useState("")

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
      productsInCart.map((itemInCart) => {
        if(itemInCart.product.id === item.product.id) {
          itemInCart.quantity = itemInCart.quantity +1;
          countProductsInCart()
          updateLS(productsInCart) 
        }
      })
    } else {
      setProductsInCart([...productsInCart, item])
      countProductsInCart()
      updateLS(productsInCart) 
    }
}

const updateLS = (productsInCart: ICartItem[]) => { 
  localStorage.setItem("FBS-cart", JSON.stringify(productsInCart));
}

  const decreaseProductCount = (item: ICartItem) => {
    if(checkItem(item)){
      productsInCart.map((itemInCart) => {
        if(itemInCart.product.id === item.product.id) {
          if(itemInCart.quantity > 1) {
            itemInCart.quantity = itemInCart.quantity -1;
            countProductsInCart()
            updateLS(productsInCart) 
          } else {
            removeProduct(item)
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
    setErrorMsg("Produkt borttagen")
  }

  const countProductsInCart = () => {
    let totalAmmount = 0;
    productsInCart.map((itemInCart) => {
      totalAmmount = totalAmmount + itemInCart.quantity
    })
    setNumberInCart(totalAmmount)    
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
  taxRate: number, 
  reference: string
}
const postArray: IPostArray[] = [];

function addObject(itemInCart: ICartItem) {
  const newObj: IPostArray = {
      name: itemInCart.product.title,
      unitPrice: itemInCart.product.price, 
      quantity: itemInCart.quantity, 
      taxRate: 0.25, 
      reference: itemInCart.product._id
  };

  postArray.push(newObj);
}

uniqueProducts.map((itemInCart) => {
  addObject(itemInCart);
})
//En ful-lösning för att lägga till frakt på ordrar. (Finns bara ett fraktalternativ i dagsläget)
const shipping: IPostArray = {
  name: "Frakt",
  unitPrice: 100, 
  quantity: 1, 
  taxRate: 0.25, 
  reference: "65b397ed154d8aad88c9ae47"
};
postArray.push(shipping);

const response = await fetch("/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    "merchant":{
      "checkoutUri":"https://www.examplestore.com/checkout.php",
      "confirmationUri":"http://localhost:5173/confirmation",
      "notificationUri":"https://www.examplestore.com/notification.php",
      "termsUri":"https://www.examplestore.com/terms.php"
    },
    "order":{
      "currency":"sek",
      "items": postArray
    },
    "customer":{
      "city":loggedInUser.city,
      "countryCode":null,
      "identityNumber":null,
      "email":loggedInUser.email,
      "firstName":loggedInUser.firstName,
      "lastName":loggedInUser.lastName,
      "phone":null,
      "postalCode":loggedInUser.postCode,
      "street":loggedInUser.street,
      "type":"person"
   },
   "description": loggedInUser._id

  }), 
})
const res =  await response.json();
localStorage.setItem("FBS-checkout", res.id)

redirectToPaysonCheckout(res.snippet)
}

const redirectToPaysonCheckout = (adjustedSnippet:string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = adjustedSnippet
  const paysonContainer = tempDiv.querySelector<HTMLDivElement>('#paysonContainer');
  const url: string = paysonContainer?.getAttribute('url') ?? 'default-url'; 
  setResponseSnippet(url)
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
        responseSnippet, 
        setResponseSnippet,
        setProductsInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;