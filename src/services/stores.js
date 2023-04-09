const stores = [
  {
    slug: "my-store",
    name: "My Store",
    freshToday: [],
  },
  {
    slug: "horta-123",
    name: "Horta 123",
    freshToday: [{ name: "Alface", price: 3.5 }],
  },
];

export function getStoreBySlug(slug) {
  return Promise.resolve(stores.find(s => slug === s.slug));
}
