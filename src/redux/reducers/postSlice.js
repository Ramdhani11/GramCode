import { createSlice } from "@reduxjs/toolkit";

const postReducer = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    GET_POSTS: (state, actions) => {
      state.posts = [...actions.payload];
    },
    CREATE_POST: (state, actions) => {
      state.posts = [...state.posts, actions.payload];
    },
    UPDATE_POST: (state, actions) => {},
    DELETE_POST: (state, actions) => {},
  },
});

export const { GET_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } =
  postReducer.actions;
export default postReducer.reducer;
