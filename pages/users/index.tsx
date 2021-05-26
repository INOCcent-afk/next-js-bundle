import React from "react";

import UsersList from "../../containers/UsersList";
import PostsList from "../../containers/PostsList";

import { getUsers } from "../../utils/api/getUsers";
import { getPosts } from "../../utils/api/getPosts";

import styled from "styled-components";

const index = ({ users, posts }) => {
  return (
    <StyledProductsContainer>
      <UsersList users={users} />
      <PostsList posts={posts} />
    </StyledProductsContainer>
  );
};

export default index;

export const getStaticProps = async () => {
  const users = await getUsers();
  const posts = await getPosts();

  return { props: { users, posts } };
};

export const StyledProductsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > div {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
  }
`;
