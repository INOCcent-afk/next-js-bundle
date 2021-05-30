import React from "react";

import { getPosts } from "../utils/api/getPosts";
import { getUsers } from "../utils/api/getUsers";

import styled from "styled-components";

const email = () => {
  return (
    <>
      <h1>EMAIL SERVER SIDE PROPS</h1>
    </>
  );
};

export default email;

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
