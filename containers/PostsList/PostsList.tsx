import React, { FC } from "react";
import Link from "next/link";

import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addPosts } from "../../redux/Posts.slice";
import { getPosts } from "../../utils/api/getPosts";

import styled from "styled-components";

type Props = {
  posts: PropsInfo[];
};

type PropsInfo = {
  id: number;
  title: string;
  body: string;
};

const PostsList: FC<Props> = ({ posts }: Props) => {
  const dispatch = useAppDispatch();
  const selectPosts = useAppSelector((state) => state.posts.data);

  const { data, error, isFetching } = useQuery("posts", getPosts, {
    initialData: posts,
  });

  React.useEffect(() => {
    if (data) {
      dispatch(addPosts(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      <h1>POSTS LISTS:</h1>
      {selectPosts.map((post) => (
        <StyledContainer key={post.id}>
          <Link href={`posts/${post.id}`}>
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </Link>
        </StyledContainer>
      ))}
    </div>
  );
};

export default PostsList;

const StyledContainer = styled.div`
  background: #000;
  margin: 10px 40px 10px 0;
  padding: 10px 50px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background: maroon;
  }
`;
