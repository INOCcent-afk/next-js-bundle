import React, { FC } from "react";
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
    <>
      <h1>POSTS LISTS:</h1>
      {selectPosts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default PostsList;
