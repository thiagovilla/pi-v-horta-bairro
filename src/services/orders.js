import { clearBasket } from "./basket";

const orders = [];

export async function getOrders() {
  return Promise.resolve(orders);
}

export async function createOrder(order) {
  order.date = new Date();
  order.id = +order.date;
  order.canceled = false;
  orders.push(order);
  clearBasket();
  return Promise.resolve(order);
}

export async function cancelOrder(id) {
  const order = orders.find(o => id === o.id);
  if (!order) throw Error("ERR_ORDER_NOT_FOUND");
  order.canceled = true;
  return Promise.resolve(order);
}
