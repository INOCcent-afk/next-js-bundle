export const getUsers = () => {
  return fetch(`http://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

export const getSingleUser = (id: string) => {
  return fetch(`http://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json().catch((error) => ({ error }))
  );
};
