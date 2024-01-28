import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext';

function UserOrders() {

    const { userOrders } = useContext(UserContext);    

  return (
    <div className='userOrderHistory'>
            <table className="orderTable">
              <thead>
                  <tr>
                  <th>Datum: </th>
                  <th>Ordernummer: </th>
                  <th>Status: </th>
                  <th>Produkt: </th>
                  <th>Antal: </th>
                  <th>Pris per st.:</th>
                  <th>Totalt: </th>
                  </tr>
              </thead>

              {userOrders?.map((userOrder) => (
                <tbody key={userOrder.purchaseId}>
                  <tr>
                    <td>{new Date(userOrder.history.created).toLocaleString()}</td>
                    <td>{userOrder.purchaseId}</td>
                    {userOrder.status =="readyToShip" ? <td>Ej hanterad</td> : <td>Levererad</td>}
                    {/* <td>{userOrder.status} </td> */}
                  </tr>
                  {userOrder.order.items?.map((userOrderItem) => (
                    <tr key={userOrderItem.itemId}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{userOrderItem.name}</td>
                      {userOrderItem.name != "Frakt" ? 
                      <>
                      <td>{userOrderItem.quantity}</td>
                      <td>{userOrderItem.unitPrice}:-</td>
                      </> : <><td></td><td></td> </>}
                      <td>{userOrderItem.totalPriceIncludingTax}:-</td>
                  </tr>
                  ))}
                  <tr className="lastRow">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="txtTotalt">Totalt:</td>
                  <td className="txtSum">{userOrder?.order.totalPriceIncludingTax}:-</td>
                  </tr>
                </tbody>
              ))}
          </table>

    </div>
  )
}

export default UserOrders