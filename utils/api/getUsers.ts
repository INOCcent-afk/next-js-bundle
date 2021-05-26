export const getUsers = () => {
  return fetch(`http://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
