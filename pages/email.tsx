import React from "react";

import { getPosts } from "../utils/api/getPosts";
import { getUsers } from "../utils/api/getUsers";

import styled from "styled-components";
import UsersList from "../containers/UsersList";

const email = ({ users, posts }) => {
  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default email;

export const getServerSideProps = async () => {
  const users = await getUsers();
  const posts = await getPosts();

  return { props: { users, posts } };
};
