import React from "react";
import { Form, useLoaderData } from "react-router-dom";

import { addFreshProduct, getStoreBySlug } from "../services/stores";

function Admin() {
  const { freshToday } = useLoaderData();

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
                {product.name} - {product.price}
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
  const { freshToday } = await getStoreBySlug("horta-123");
  return { freshToday };
}

export async function action({ request }) {
  const formData = await request.formData();
  if (request.method === "POST") {
    const product = Object.fromEntries(formData);
    product.id = +new Date();
    return addFreshProduct("xyz", product);
  }
}
