import React, { FC } from "react";
import Link from "next/link";

import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addPosts } from "../../redux/Posts.slice";
import { getPosts } from "../../utils/api/getPosts";

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
        <Link href={`posts/${post.id}`} key={post.id}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
