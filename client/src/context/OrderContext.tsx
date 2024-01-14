// Import the necessary dependencies
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { IOrder } from "../assets/interfaces/IOrderObject";
import { CartContext } from "../context/CartContext";
// import { UserContext } from "../context/UserContext";
// import IUser from "../assets/interfaces/IUser";


interface OrderContextProps {
  currentOrderId: string;
  setCurrentOrderId: React.Dispatch<React.SetStateAction<string>>;
  getCurrentOrder: () => Promise<void>;
  currentOrder: IOrder | null;
  setCurrentOrder: React.Dispatch<React.SetStateAction<IOrder | null>>;
}

export const OrderContext = createContext<OrderContextProps>({} as OrderContextProps);

const OrderContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { setNumberInCart, setProductsInCart } = useContext(CartContext);
  // const { loggedInUser } = useContext(UserContext);
  // console.log("CartContext value:", useContext(CartContext));

  
  
  // States
  const [currentOrderId, setCurrentOrderId] = useState("");
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null); 

  // Functions
  const getCurrentOrder = async () => {
    
    const orderId = localStorage.getItem("FBS-checkout") || "[]";
    setCurrentOrderId(orderId);
    const response = await fetch(`api/orders/${orderId}`);
    const currentPaysonOrder: IOrder = await response.json();

    setCurrentOrder(currentPaysonOrder);
    clearLocalStorage();  
    convertOrderToMongo(currentPaysonOrder);  
  };

  const clearLocalStorage = () => {
    setNumberInCart(0); 
    setProductsInCart([]);
    localStorage.setItem("FBS-checkout", "")
    localStorage.setItem("FBS-cart", "")
  };

  const convertOrderToMongo = (currentPaysonOrder: IOrder) => {
    sendToMongo(currentPaysonOrder)
  }

  const sendToMongo = async (currentPaysonOrder: IOrder) => {
    await fetch("/api/orders/mongo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
          status: currentPaysonOrder.status,
          id: currentPaysonOrder.id,
          expirationTime: currentPaysonOrder.expirationTime,
          description: currentPaysonOrder.description,
          snippet: currentPaysonOrder.snippet,
          customer: {
              city: currentPaysonOrder.customer.city,
              countryCode: currentPaysonOrder.customer.countryCode,
              identityNumber: currentPaysonOrder.customer.identityNumber,
              email: currentPaysonOrder.customer.email,
              firstName: currentPaysonOrder.customer.firstName,
              lastName: currentPaysonOrder.customer.lastName,
              phone: currentPaysonOrder.customer.phone,
              postalCode: currentPaysonOrder.customer.postalCode,
              street: currentPaysonOrder.customer.street,
              type: currentPaysonOrder.customer.type
          },
          order: {
              currency: currentPaysonOrder.order.currency,
              totalFeeExcludingTax: currentPaysonOrder.order.totalFeeExcludingTax,
              totalFeeIncludingTax: currentPaysonOrder.order.totalFeeIncludingTax,
              totalPriceExcludingTax: currentPaysonOrder.order.totalPriceExcludingTax,
              totalPriceIncludingTax: currentPaysonOrder.order.totalPriceIncludingTax,
              totalTaxAmount: currentPaysonOrder.order.totalTaxAmount,
              totalCreditedAmount: currentPaysonOrder.order.totalCreditedAmount,
              items: currentPaysonOrder.order.items

          },
          // merchant: {
          //     checkoutUri: currentPaysonOrder.merchant.checkoutUri,
          //     confirmationUri: currentPaysonOrder.merchant.confirmationUri,
          //     partnerId: currentPaysonOrder.merchant.partnerId,
          //     notificationUri: currentPaysonOrder.merchant.notificationUri,
          //     validationUri: currentPaysonOrder.merchant.validationUri,
          //     termsUri: currentPaysonOrder.merchant.termsUri,
          //     integrationInfo: currentPaysonOrder.merchant.integrationInfo,
          //     reference: currentPaysonOrder.merchant.reference
          // },
          // gui: {
          //     colorScheme: currentPaysonOrder.gui.colorScheme,
          //     locale: currentPaysonOrder.gui.locale,
          //     requestPhone: currentPaysonOrder.gui.requestPhone,
          //     phoneOptional: currentPaysonOrder.gui.phoneOptional,
          //     verification: currentPaysonOrder.gui.verification,
          //     countries: currentPaysonOrder.gui.countries
          // },
          history: {
              created: currentPaysonOrder.history.created,
              readyToPay: currentPaysonOrder.history.readyToPay,
              readyToShip: currentPaysonOrder.history.readyToShip,
              shipped: currentPaysonOrder.history.shipped,
              paidToAccount: currentPaysonOrder.history.paidToAccount,
              canceled: currentPaysonOrder.history.canceled,
              expired: currentPaysonOrder.history.expired,
              denied: currentPaysonOrder.history.denied
          },
          purchaseId: currentPaysonOrder.purchaseId,
          links: currentPaysonOrder.links
      }
      ), 
  })
  }


  


  return (
    <OrderContext.Provider
      value={{
        currentOrderId,
        setCurrentOrderId,
        getCurrentOrder,
        currentOrder,
        setCurrentOrder,
        
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
