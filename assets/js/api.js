async function fetchProducts() {
  let status = null;
  const url = "https://fakestoreapi.com/products";

  const res = await fetch(url);

  if (!res.ok) {
    return (status = false);
  }

  const data = await res.json();

  if (data.length) status = true;

  return { status, products: data };
}

export default fetchProducts;

// two ways to export file
// 1 default export
// 2 name export
// export const name= "taiwo"
// export const state= "Lagos"

async function fetchProduct(id) {
  const url = `https://fakestoreapi.com/products/${id}`;
  let status = null;
  const res = await fetch(url);

  if (!res.ok) {
    return (status = false);
  }

  const data = await res.json();

  //console.log(data);

  if (data.id) status = true;

  return { status, product: data };
}
export { fetchProduct };

// retrieve data from lsg
export const carts = JSON.parse(localStorage.getItem("bestShopCart")) || [];

export const cartQty = (cartsqty) => {
  return cartsqty.reduce((acc, curCart) => acc + curCart.quantity, 0);
};
// console.log(cartQty);
// store cart data
export function storeCartData(data) {
  localStorage.setItem("bestShopCart", JSON.stringify(data));
}
