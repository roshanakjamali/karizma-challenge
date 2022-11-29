export function fetchUsers() {
  return fetch(`${process.env.REACT_APP_BASE_URL}/users`).then((response) =>
    response.json()
  );
}
