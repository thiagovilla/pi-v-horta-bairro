const orders = [];

export async function createOrder(order) {
  orders.push(order);
  return Promise.resolve(order);
}
