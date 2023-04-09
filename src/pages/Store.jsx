import React from "react";
import { useLoaderData } from "react-router-dom";

import { getStoreBySlug } from "../services/stores";

function Store() {
  const { store } = useLoaderData();

  return (
    <div>
      <h1>{store.name}</h1>
    </div>
  );
}

export default Store;

export async function loader({ params }) {
  const store = await getStoreBySlug(params.slug);
  return { store };
}
