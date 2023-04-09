const orders = [];

export async function getOrders() {
  return Promise.resolve(orders);
}

export async function createOrder(order) {
  order.date = new Date();
  orders.push(order);
  return Promise.resolve(order);
}
