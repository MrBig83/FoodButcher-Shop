import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { IOrder } from "../assets/interfaces/IOrderObject";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

interface OrderContextProps {
  currentOrderId: string;
  setCurrentOrderId: React.Dispatch<React.SetStateAction<string>>;
  getCurrentOrder: () => Promise<void>;
  currentOrder: IOrder | null;
  setCurrentOrder: React.Dispatch<React.SetStateAction<IOrder | null>>;
  getAdminOrders: () => Promise<void>;
  adminOrdersRaw: IOrder[];
  setAdminOrdersRaw: React.Dispatch<React.SetStateAction<IOrder[]>>
  updateOrder: (id: string, status: string) => Promise<void>;
}

export const OrderContext = createContext<OrderContextProps>({} as OrderContextProps);

const OrderContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { setNumberInCart, setProductsInCart } = useContext(CartContext);
  const { getProducts } = useContext(ProductContext);
  
  // States
  const [currentOrderId, setCurrentOrderId] = useState("");
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null); 
  const [adminOrdersRaw, setAdminOrdersRaw] = useState<IOrder[]>([]); 

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
  getProducts()
  }

  const updateOrder = async (id:string, status:string) => {
    await fetch(`/api/orders/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({status: status})
    })  
    getAdminOrders()  
  }
  
  
  const getAdminOrders = async () => {
    const response = await fetch(`api/orders/`);
    const adminOrdersRaw: IOrder[] = await response.json();
    setAdminOrdersRaw(adminOrdersRaw)
  };
  useEffect(() => {
    getAdminOrders()
}, [])


  return (
    <OrderContext.Provider
      value={{
        currentOrderId,
        setCurrentOrderId,
        getCurrentOrder,
        currentOrder,
        setCurrentOrder,
        getAdminOrders, 
        adminOrdersRaw, 
        setAdminOrdersRaw, 
        updateOrder
        
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;