import sendRequest from './send-request';

const BASE_URL = 'https://jerseyscoresapi.onrender.com/orders';


export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}


export function addItemToCart(itemId) {

  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}


export function checkout() {

  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAll() {
  return sendRequest(`${BASE_URL}/getorders`);
}

export function deleteOrder(orderId) {
  console.log('ordersApi', orderId)
  return sendRequest(`${BASE_URL}/${orderId}`, 'DELETE');
}