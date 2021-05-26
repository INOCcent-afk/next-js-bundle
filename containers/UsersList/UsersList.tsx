import React, { FC } from "react";
import { useQuery } from "react-query";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addUsers } from "../../redux/Users.slice";
import { getUsers } from "../../utils/api/getUsers";

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
    <>
      <h1>USERS LISTS:</h1>
      {isFetching ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {selectUsers.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </>
      )}
    </>
  );
};

export default UsersList;
