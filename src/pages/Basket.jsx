import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import { getBasket, updateBasketQuantities } from "../services/basket";
import { createOrder } from "../services/orders";

function Basket() {
  const { basket } = useLoaderData();

  if (basket.products.length < 1)
    return <div>Cesta vazia. Adicione alguns itens.</div>;

  const listItems = basket.products.map(product => (
    <li key={product.id}>
      <label>
        <input
          type="number"
          name={product.id}
          defaultValue={product.quantity}
          step={1}
          min={0}
        />
        {product.name}
      </label>
    </li>
  ));

  return (
    <div>
      <h1>Cesta</h1>
      <Form method="patch">
        <ul>{listItems}</ul>
        <button type="submit">Atualizar quantidades</button>
      </Form>
      <Form method="post">
        <label>
          Nome: <input type="text" name="name" required />
        </label>
        <input type="hidden" name="basket" value={JSON.stringify(basket)} />
        <button type="submit">Reservar pedido</button>
      </Form>
      <p>Total: {basket.total}</p>
    </div>
  );
}

export default Basket;

export async function loader() {
  const basket = await getBasket();
  return { basket };
}

export async function action({ request }) {
  const formData = await request.formData();
  if (request.method === "PATCH") {
    const prodQtyMap = Object.fromEntries(formData);
    const basket = await updateBasketQuantities(prodQtyMap);
    return { basket };
  } else if (request.method === "POST") {
    const order = Object.fromEntries(formData);
    order.basket = JSON.parse(order.basket);
    const createdOrder = await createOrder(order);
    return { createdOrder };
  } else {
    throw Error("ERR_UNKNOWN_METHOD");
  }
}
