import React from "react";

import { GetServerSideProps } from "next";
import { getSingleUser } from "../../utils/api/getUsers";

const EmailDetails = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default EmailDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;

  const data = await getSingleUser(id);

  return { props: { user: data } };
};
