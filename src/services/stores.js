const stores = [
  {
    slug: "my-store",
    name: "My Store",
    freshToday: [],
  },
  {
    slug: "horta-123",
    name: "Horta 123",
    freshToday: [
      { id: "alface", name: "Alface", price: 3.5 },
      { id: "couve", name: "Couve", price: 3 },
    ],
  },
];

export function getStoreBySlug(slug) {
  return Promise.resolve(stores.find(s => slug === s.slug));
}
