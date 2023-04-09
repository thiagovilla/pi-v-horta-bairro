import React from "react";
import { useLoaderData } from "react-router-dom";

import { getStoreBySlug } from "../services/stores";

function Store() {
  const { store } = useLoaderData();

  return (
    <div>
      <h1>{store.name}</h1>
      <FreshToday products={store.freshToday} />
    </div>
  );
}

function FreshToday(props) {
  if (props.products.length < 1) return <div>Sem produtos frescos hoje.</div>;

  const listItems = props.products.map(product => (
    <li>
      {product.name} - {product.price}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default Store;

export async function loader({ params }) {
  const store = await getStoreBySlug(params.slug);
  return { store };
}
