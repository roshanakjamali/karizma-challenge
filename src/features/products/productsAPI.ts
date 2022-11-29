export function fetchProducts() {
  return fetch(`${process.env.REACT_APP_BASE_URL}/products`).then((response) =>
    response.json()
  );
}
