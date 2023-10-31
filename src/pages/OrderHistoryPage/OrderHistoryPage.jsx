import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import { deleteOrder } from '../../utilities/orders-api'

export default function OrderHistoryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderData = queryParams.get('orderData');
  console.log('working');
  const [previousOrders, setPreviousOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(function() {
    console.log('useEffect is running!');
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      console.log(orders);

      const ordersWithTotalQuantity = orders.map((order) => {
        const totalQty = order.lineItems.reduce((total, item) => total + item.qty, 0);
        return { ...order, totalQty };
      });

      setPreviousOrders(ordersWithTotalQuantity);
    }
    getOrders();
  }, []);


  const deleteOrder = async (orderId) => {
    try {
     await ordersAPI.deleteOrder(orderId);
     fetchOrderHistory()
     const updatedOrderHistory = OrderHistoryPage.filter(order => order.orderId !== orderId);
     setOrderHistory(updatedOrderHistory);
     setSelectedOrder(null);
   } catch (error) {
     console.error('Error deleting order:', error);
   }
 };
console.log(previousOrders)
  return (
    <div>
      <h1>Order History</h1>
      {previousOrders.length > 0 ? (
        <ul>
          {previousOrders.map((order, index) => (
            <div key={index}>
              <h3>Order ID: {order.orderId}</h3>
              <p>Order Total: ${order.orderTotal}</p>
              <p>Total Quantity: {order.totalQty}</p> {/* Display the total quantity of the order */}
              <button onClick={() => deleteOrder(order.id)}>Delete</button> {/* Delete button */}
            </div>
          ))}
        </ul>
      ) : (
        <p>No orders in the history.</p>
      )}
    </div>
  );
}