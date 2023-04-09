const stores = [
  {
    id: "abc",
    slug: "my-store",
    name: "My Store",
    freshToday: [],
    distance: 1.2,
  },
  {
    id: "xyz",
    slug: "horta-123",
    name: "Horta 123",
    freshToday: [
      { id: "alface", name: "Alface", price: 3.5 },
      { id: "couve", name: "Couve", price: 3 },
    ],
    distance: 3,
  },
];

export async function getStoresNear(location, within = 5) {
  return Promise.resolve(stores.filter(s => within > s.distance));
}

export async function getStoreBySlug(slug) {
  return Promise.resolve(stores.find(s => slug === s.slug));
}

export async function addFreshProduct(storeId, product) {
  const store = stores.find(s => storeId === s.id);
  if (!store) throw Error("ERR_STORE_NOT_FOUND");
  store.freshToday.push(product);
  return Promise.resolve(store);
}
