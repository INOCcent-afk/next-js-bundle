export const getPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

export const getSinglePost = (id: string | string[]) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json().catch((error) => ({ error }))
  );
};
