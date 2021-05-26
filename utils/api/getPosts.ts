export const getPosts = () => {
  return fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};

export const getSinglePost = (id: string) => {
  return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json().catch((error) => ({ error }))
  );
};
