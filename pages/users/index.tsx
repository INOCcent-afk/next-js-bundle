import React from "react";

import UsersList from "../../containers/UsersList";
import PostsList from "../../containers/PostsList";

import { getUsers } from "../../utils/api/getUsers";
import { getPosts } from "../../utils/api/getPosts";

const index = ({ users, posts }) => {
  return (
    <div>
      <h1>Users Page</h1>
      <UsersList users={users} />
      <PostsList posts={posts} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const users = await getUsers();
  const posts = await getPosts();

  return { props: { users, posts } };
};
