import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Counter.slice";
import usersReducer from "./Users.slice";
import postsReducer from "./Posts.slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
