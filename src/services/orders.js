import { clearBasket } from "./basket";

const orders = [
  {
    id: 123,
    date: new Date(),
    name: "Maria",
    canceled: false,
    basket: {
      products: [
        { id: "alface", name: "Alface", price: 3.5, quantity: 1 },
        { id: "couve", name: "Couve", price: 3, quantity: 1 },
      ],
      total: 6.5,
    },
  },
];

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

export async function fulfillOrder(id) {
  const order = orders.find(o => id === o.id);
  if (!order) throw Error("ERR_ORDER_NOT_FOUND");
  order.fulfilled = true;
  return Promise.resolve(order);
}
