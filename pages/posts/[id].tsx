import React, { FC } from "react";
import { useRouter } from "next/router";

import { getPosts, getSinglePost } from "../../utils/api/getPosts";

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

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await getSinglePost(id);

  return { props: { post: data } };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
