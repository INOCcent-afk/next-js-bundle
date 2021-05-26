import { createSlice } from "@reduxjs/toolkit";

type SetCounter = {
  count: number;
};

const initialState: SetCounter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
