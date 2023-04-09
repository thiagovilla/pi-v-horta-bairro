import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import {
  addFreshProduct,
  getStoreBySlug,
  removeFreshProduct,
} from "../services/stores";
import { cancelOrder, getOrders } from "../services/orders";

function Admin() {
  const { freshToday, orders } = useLoaderData();

  return (
    <div>
      <h1>Painel de controle</h1>

      <section>
        <h2>Produtos frescos hoje</h2>
        <Form method="post">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" required />
          <label htmlFor="price">Preço:</label>
          <input type="number" name="price" step={0.25} min={0} required />
          <button type="submit">Adicionar</button>
        </Form>
        {freshToday.length < 1 ? (
          <p>Nenhum produto fresco hoje ainda.</p>
        ) : (
          <ul>
            {freshToday.map(product => (
              <li key={product.id}>
                <Form method="delete">
                  <label>
                    {product.name} - {product.price}
                    <input type="hidden" name="id" value={product.id} />
                    <button type="submit">Remover</button>
                  </label>
                </Form>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Pedidos atuais</h2>
        {orders.length < 1 ? (
          <p>Nenhum pedido ainda.</p>
        ) : (
          <ul>
            {orders.map(order => (
              <li
                key={order.id}
                style={
                  order.canceled
                    ? { color: "gray", textDecoration: "line-through" }
                    : {}
                }
              >
                <h3>{order.date.toString()}</h3>
                <p>
                  <strong>De: {order.name}</strong>
                </p>
                <ul>
                  {order.basket.products.map(product => (
                    <li key={product.id}>
                      {product.name} ({product.quantity})
                    </li>
                  ))}
                </ul>
                <p>Total: {order.basket.total}</p>
                <Form method="patch">
                  <input type="hidden" name="id" value={order.id} />
                  <input type="hidden" name="action" value="cancel" />
                  <button type="submit" disabled={order.canceled}>
                    Cancelar
                  </button>
                </Form>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Admin;

export async function loader() {
  const orders = await getOrders();
  const { freshToday } = await getStoreBySlug("horta-123");
  return { freshToday, orders };
}

export async function action({ request }) {
  const formData = await request.formData();
  if (request.method === "POST") {
    const product = Object.fromEntries(formData);
    product.id = +new Date();
    return addFreshProduct("xyz", product);
  } else if (request.method === "DELETE") {
    return removeFreshProduct("xyz", +formData.get("id"));
  } else if (request.method === "PATCH") {
    return cancelOrder(+formData.get("id"));
  } else {
    throw Error("ERR_UNKNOWN_METHOD");
  }
}
