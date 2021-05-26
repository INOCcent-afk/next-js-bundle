import { createSlice } from "@reduxjs/toolkit";

type SetUsers = {
  data: SetUserInfo[];
};

type SetUserInfo = {
  id: number;
  name: string;
};

const initialState: SetUsers = {
  data: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
