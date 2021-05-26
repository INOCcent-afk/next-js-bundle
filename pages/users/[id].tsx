import React, { FC } from "react";
import { useRouter } from "next/router";

import { getUsers, getSingleUser } from "../../utils/api/getUsers";
import { useAppSelector } from "../../redux/hook";

type Props = {
  user: any;
};

const Details: FC<Props> = ({ user }: Props) => {
  const router = useRouter();

  return (
    <>
      <div>
        <a onClick={() => router.back()}>Go Back</a>
      </div>
      <h1>{user.name}</h1>
    </>
  );
};

export default Details;

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await getSingleUser(id);

  return { props: { user: data } };
};

export const getStaticPaths = async () => {
  const users = await getUsers();

  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
