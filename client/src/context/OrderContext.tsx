import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { IOrder, IOrderHistory } from "../assets/interfaces/IOrderObject";
import { UserContext } from "./UserContext";
import IUser from "../assets/interfaces/IUser";

interface OrderContextProps {
    checkoutID: string, 
    checkoutObject: IOrder, 
    orderHistoryObject: object,
    loggedInUser: IUser;
    setOrderHistoryObject: React.Dispatch<React.SetStateAction<object>>, 
    setCheckoutID: React.Dispatch<React.SetStateAction<string>>, 
    fetchOrderConfirm: (checkoutID: string) => Promise<void>, 
    saveOrderToDB: (TEMPorderHistoryObject: {
        deliveryAddress: {
            street: string;
            zipcode: string;
            city: string;
            country: string;
        };
        orderItems: IOrderHistory[];
    }
    ) => Promise<void>
}

export const OrderContext = createContext<OrderContextProps>({} as OrderContextProps);
const OrderContextProvider = ({ children }: PropsWithChildren<unknown>) => {

    const userContext = useContext(UserContext)
    const { loggedInUser } = userContext
    //Initial states
    const initialOrderState = {
        currency: "",
        items: [] ,
        totalCreditedAmount: 0,
        totalFeeExcludingTax: 0,
        totalFeeIncludingTax: 0,
        totalPriceExcludingTax: 0,
        totalPriceIncludingTax: 0,
        totalTaxAmount: 0
    }

    //States
    const [checkoutID, setCheckoutID] = useState("")
    const [checkoutObject, setCheckoutObject] = useState(initialOrderState) 
    const [orderHistoryObject, setOrderHistoryObject] = useState({})   
    
    const deliveryAddress = {
        street: loggedInUser.street,
        zipcode: loggedInUser.postCode,
        city: loggedInUser.city,
        country: "Sverige"
      }
      
      const orderItems: IOrderHistory[] = [];

      checkoutObject.items.map((item: { reference: string; quantity: number; unitPrice: number }) => {
        orderItems.push({
          product: item.reference,
          quantity: item.quantity, 
          price: item.unitPrice
        });
      });
      
      const TEMPorderHistoryObject = {
        deliveryAddress, 
        orderItems
      }
      
  //Functions
  const fetchOrderConfirm = async (checkoutID:string): Promise<void> => {   
    const response = await fetch(`/api/orders/${checkoutID}`)
    const res = await response.json()
    setCheckoutObject(res.order)
  }

  const saveOrderToDB = async (TEMPorderHistoryObject: {
    deliveryAddress: {
        street: string;
        zipcode: string;
        city: string;
        country: string;
    };
    orderItems: IOrderHistory[];
    }) => {
        const response = await fetch("api/orders/mongo", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(TEMPorderHistoryObject)
        })
        const res = await response.json(); 
        console.log(res);
    }

  useEffect(() => {
    saveOrderToDB(TEMPorderHistoryObject)
  }, [])
  


  //Nu är det dags att tömma LocalStorage och kundkorgen. 

return (
    
    <OrderContext.Provider
      value={{
        loggedInUser,
        checkoutID, 
        setCheckoutID, 
        fetchOrderConfirm, 
        checkoutObject, 
        saveOrderToDB, 
        orderHistoryObject, 
        setOrderHistoryObject
        
      }}
    >
      {children}
    </OrderContext.Provider>
    
  );
};

export default OrderContextProvider;