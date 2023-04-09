import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import { getStoreBySlug } from "../services/stores";
import { addToBasket } from "../services/basket";

function Store() {
  const { store } = useLoaderData();

  return (
    <div>
      <h1>{store.name}</h1>
      <Form method="post">
        <FreshToday products={store.freshToday} />
        <button type="submit">Adicionar à cesta</button>
      </Form>
    </div>
  );
}

function FreshToday(props) {
  if (props.products.length < 1) return <div>Sem produtos frescos hoje.</div>;

  const listItems = props.products.map(product => (
    <li key={product.id}>
      <label>
        <input
          type="checkbox"
          name="products"
          value={JSON.stringify(product)}
        />
        {product.name} - {product.price}
      </label>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default Store;

export async function loader({ params }) {
  const store = await getStoreBySlug(params.slug);
  return { store };
}

export async function action({ request }) {
  const formData = await request.formData();
  const products = formData.getAll("products").map(JSON.parse);
  const basket = await addToBasket(products);
  return { basket };
}
