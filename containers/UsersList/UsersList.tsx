import React, { FC } from "react";

import Link from "next/link";
import { useQuery } from "react-query";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addUsers } from "../../redux/Users.slice";
import { getUsers } from "../../utils/api/getUsers";

import styled from "styled-components";

type Props = {
  users: any;
};

const UsersList: FC<Props> = ({ users }: Props) => {
  const dispatch = useAppDispatch();
  const selectUsers = useAppSelector((state) => state.users.data);

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
      <h1>USERS LISTS:</h1>
      {isFetching ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {selectUsers.map((user) => (
            <StyledContainer key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </StyledContainer>
          ))}
        </>
      )}
    </div>
  );
};

export default UsersList;

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
