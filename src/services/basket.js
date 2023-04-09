const basket = {
  products: [],
  total: 0,
};

export async function getBasket() {
  return Promise.resolve(basket);
}

export async function addToBasket(products) {
  basket.products.push(...products);
  basket.total += products.reduce((total, product) => total + product.price, 0);
  return Promise.resolve(basket);
}
