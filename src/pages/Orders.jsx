import React from "react";
import { useLoaderData } from "react-router-dom";

import { getOrders } from "../services/orders";

function Orders() {
  const { orders } = useLoaderData();

  if (orders.length < 1) return <div>Você ainda não tem pedidos. Faça um!</div>;

  const listItems = orders.map(order => (
    <li key={order.date}>
      <h2>{order.date.toString()}</h2>
      <p>{order.basket.products.map(p => p.name).join(", ")}</p>
      <p>Total: {order.basket.total}</p>
      <p>
        <strong>Nome: {order.name}</strong>
      </p>
    </li>
  ));

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Orders;

export async function loader() {
  const orders = await getOrders();
  return { orders };
}
