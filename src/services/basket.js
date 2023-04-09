const basket = [];

export async function addToBasket(products) {
  basket.push(...products);
  return Promise.resolve(basket);
}
