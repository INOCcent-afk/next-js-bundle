export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

export const getSingleUser = (id: string | string[]) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json().catch((error) => ({ error }))
  );
};
