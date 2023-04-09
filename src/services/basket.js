const basket = {
  products: [],
  total: 0,
};

export async function getBasket() {
  return Promise.resolve(basket);
}

export async function addToBasket(products) {
  basket.products.push(...products);
  updateOrderTotal();
  return Promise.resolve(basket);
}

export async function updateBasketQuantities(prodQtyMap) {
  basket.products.forEach(
    product => (product.quantity = prodQtyMap[product.id])
  );
  updateOrderTotal();
  return Promise.resolve(basket);
}

export async function clearBasket() {
  basket.products = [];
  basket.total = 0;
  return Promise.resolve(basket);
}

function updateOrderTotal() {
  basket.total = basket.products.reduce(
    (total, product) => product.price * product.quantity,
    0
  );
}
