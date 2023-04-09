const stores = [
  {
    slug: "my-store",
    name: "My Store",
  },
  {
    slug: "horta-123",
    name: "Horta 123",
  },
];

export function getStoreBySlug(slug) {
  return stores.find(s => slug === s.slug);
}
