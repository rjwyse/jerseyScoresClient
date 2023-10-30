import { useLocation } from 'react-router-dom';

export default function OrderHistoryPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderData = queryParams.get('orderData');
    const order = JSON.parse(decodeURIComponent(orderData));
    return (
      <div>
        <h1>Order History</h1>
        {cart && cart.items.length > 0 ? (
          <ul>
            {cart.items.map((item, index) => (
              <li key={index}>
                <div>
                  <h3>Item Name: {item.item.name}</h3>
                  <p>Price: ${item.item.price}</p>
                  <p>Quantity: {item.qty}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders in the history.</p>
        )}
      </div>
    );
  }