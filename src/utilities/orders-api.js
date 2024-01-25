import sendRequest from './send-request';

const BASE_URL = 'https://jerseyscoresapi.onrender.com/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAll() {
  return sendRequest(`${BASE_URL}/getorders`);
}

export function deleteOrder(orderId) {
  console.log('ordersApi', orderId)
  return sendRequest(`${BASE_URL}/${orderId}`, 'DELETE');
}