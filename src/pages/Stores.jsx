import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getStoresNear } from "../services/stores";

function Stores() {
  const { stores } = useLoaderData();

  if (stores.length < 1)
    return <div>Parece que não há nenhuma horta próxima de você.</div>;

  const listItems = stores.map(store => {
    let freshToday = "nada por enquanto";
    if (store.freshToday.length > 0)
      freshToday = store.freshToday.map(p => p.name).join(", ");

    return (
      <li>
        <Link to={`/hortas/${store.slug}`}>
          <h2>{store.name}</h2>
          <p>
            <strong>Distância: {store.distance}</strong>
          </p>
          <p>Fresco hoje: {freshToday}</p>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Hortas próximas</h1>
      {listItems}
    </div>
  );
}

export default Stores;

export async function loader() {
  const stores = await getStoresNear();
  return { stores };
}
