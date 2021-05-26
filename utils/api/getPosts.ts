export const getPosts = () => {
  return fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
