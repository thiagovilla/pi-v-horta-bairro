const stores = [
  {
    slug: "my-store",
    name: "My Store",
    freshToday: [],
    distance: 1.2,
  },
  {
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
