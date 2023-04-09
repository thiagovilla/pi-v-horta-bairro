import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import { getOrders, cancelOrder } from "../services/orders";

function Orders() {
  const { orders } = useLoaderData();

  if (orders.length < 1) return <div>Você ainda não tem pedidos. Faça um!</div>;

  const listItems = orders.map(order => (
    <li key={order.id}>
      <div
        style={
          order.canceled
            ? { color: "gray", textDecoration: "line-through" }
            : {}
        }
      >
        <h2>{order.date.toString()}</h2>
        <p>
          {order.basket.products
            .map(p => p.name + ` (${p.quantity})`)
            .join(", ")}
        </p>
        <p>Total: {order.basket.total}</p>
        <p>
          <strong>Nome: {order.name}</strong>
        </p>
      </div>
      <Form method="delete">
        <input type="hidden" name="id" value={order.id} />
        <button type="submit" disabled={order.canceled}>
          Cancelar
        </button>
      </Form>
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
  const orders = (await getOrders()).filter(o => !o.fulfilled);
  return { orders };
}

export async function action({ request }) {
  const formData = await request.formData();
  const order = await cancelOrder(+formData.get("id"));
  return { order };
}
