import React from "react";
import { useLoaderData } from "react-router-dom";

import { getBasket } from "../services/basket";

function Basket() {
  const { basket } = useLoaderData();

  if (basket.products.length < 1)
    return <div>Cesta vazia. Adicione alguns itens.</div>;

  const listItems = basket.products.map(product => (
    <li key={product.id}>{product.name}</li>
  ));

  return (
    <div>
      <h1>Cesta</h1>
      <ul>{listItems}</ul>
      <p>Total: {basket.total}</p>
    </div>
  );
}

export default Basket;

export async function loader() {
  const basket = await getBasket();
  return { basket };
}