import React, { FC } from "react";
import { useRouter } from "next/router";

import { getPosts, getSinglePost } from "../../utils/api/getPosts";
import { GetStaticProps } from "next";

type Props = {
  post: {
    id: number;
    title: string;
    body: string;
  };
};

const PostDetail: FC<Props> = ({ post }: Props) => {
  const router = useRouter();

  return (
    <>
      <div>
        <a onClick={() => router.back()}>Go Back</a>
      </div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;

  const data = await getSinglePost(id);

  return { props: { post: data } };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: { id: number }) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
