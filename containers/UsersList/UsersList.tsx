import React, { FC } from "react";

import Link from "next/link";
import { useQuery } from "react-query";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addUsers } from "../../redux/Users.slice";
import { getUsers } from "../../utils/api/getUsers";

import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  users: any;
};

const variant = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
  start: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const child = {
  initial: {
    opacity: 0,
    y: 10,
  },
  start: {
    y: 0,
    opacity: 1,
  },
};

const UsersList: FC<Props> = ({ users }: Props) => {
  const dispatch = useAppDispatch();
  const selectUsers = useAppSelector((state) => state.users.data);
  const [check, setCheck] = React.useState(false);

  const { data, error, isFetching } = useQuery("users", getUsers, {
    initialData: users,
  });

  React.useEffect(() => {
    if (data) {
      dispatch(addUsers(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      <h1 onClick={() => setCheck(!check)}>USERS LISTS:</h1>
      {isFetching ? (
        <h1>Loading....</h1>
      ) : (
        <motion.div
          variants={variant}
          initial="initial"
          animate={check ? "start" : "initial"}
        >
          {selectUsers.map((user) => (
            <StyledContainer variants={child} key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </StyledContainer>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default UsersList;

const StyledContainer = styled(motion.div)`
  background: #000;
  margin: 10px 40px 10px 0;
  padding: 10px 50px;
  cursor: pointer;
  border-radius: 5px;

  a {
    color: #fff;
  }

  &:hover {
    background: maroon;
  }
`;
