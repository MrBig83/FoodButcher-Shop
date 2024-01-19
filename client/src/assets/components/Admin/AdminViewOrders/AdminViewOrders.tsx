// import React, { useEffect } from 'react'
import { useContext, useState } from "react";

import "./AdminViewOrders.css"

import { OrderContext } from "../../../../context/OrderContext";
import { IOrder } from "../../../interfaces/IOrderObject";

function AdminViewOrders() {
    const { adminOrdersRaw, updateOrder } = useContext(OrderContext)

    const [expandedOrders, setExpandedOrders] = useState<string[]>([]);

    const toggleOrder = (orderId: string) => {
      // Check if orderId is already in the expandedOrders array
      const isExpanded = expandedOrders.includes(orderId);
  
      // Toggle the state based on whether the orderId is already expanded or not
      if (isExpanded) {
        setExpandedOrders(expandedOrders.filter((id) => id !== orderId));
      } else {
        setExpandedOrders([...expandedOrders, orderId]);
      }
    };
    


    const renderAllOrders = (orders: IOrder[]) => {
        
      return orders.map((order) => (
        <div key={order.id} style={{display: "flex", alignItems: "center"}}>
            <div className="deliveryStatus" style={{backgroundColor: order.status === "Levererad" ? "lightgreen" : "red"}}></div>
          <p
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => toggleOrder(order.id)}
          >
            {order.purchaseId + " - " + new Date(order.history.created).toLocaleString()}
          </p>
          {expandedOrders.includes(order.id) && (
            <div className="renderSingleOrder">
                <p>Status:</p>
            <div className="handleOrderSection">
                <div 
                    className="deliveryStatus" 
                    style={{backgroundColor: order.status === "Levererad" ? "lightgreen" : "red"}}>
                </div>
                {order.status === "Levererad" ? <p>Levererad</p> : <p>Ej hanterad</p>}
                <button onClick={() => updateOrder(order.id, "Levererad")}>Levererad</button>
            </div>
              <p style= {{marginLeft: "10px"}}>Leveransadress: </p>
              <p>{order.customer.firstName} {order.customer.lastName}</p>
              <p>{order.customer.street}</p>
              <p>{order.customer.postalCode} {order.customer.city}</p>
              <p style= {{marginLeft: "10px"}}>Varor: </p>
              {order.order.items.map((product) => (
                  <p key={product.itemId}><strong>{product.quantity}x</strong> {product.name}</p>
              ))}
              
            </div>
          )}
        </div>
      ));
    };
  
    const orders: IOrder[] = adminOrdersRaw; // Replace with your actual orders array
  
    return (
      <div>
        
        {renderAllOrders(orders)}
      </div>
    );
  }


export default AdminViewOrders