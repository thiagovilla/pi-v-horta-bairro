import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import { getBasket, updateBasketQuantities } from "../services/basket";

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
      <Form method="post">
        <ul>{listItems}</ul>
        <button type="submit">Atualizar quantidades</button>
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
  const prodQtyMap = Object.fromEntries(formData);
  const basket = await updateBasketQuantities(prodQtyMap);
  return { basket };
}
