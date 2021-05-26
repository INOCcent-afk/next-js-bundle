import { createSlice } from "@reduxjs/toolkit";

type SetPosts = {
  data: SetPostInfo[];
};

type SetPostInfo = {
  id: number;
  title: string;
  body: string;
};

const initialState: SetPosts = {
  data: [],
};

const postsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPosts: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
