import { createSlice } from "@reduxjs/toolkit";

export const createPostSlice = createSlice({
  name: "box",
  initialState: {
    avatar: undefined,
    contentPost: {
      text: undefined,
      inputfile: null,
    },
    next: false,
  },
  reducers: {
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    unAvatar: (state) => {
      state.avatar = undefined;
    },
    setContentPost: (state, action) => {
      state.contentPost = action.payload;
    },
    unContentPost: (state) => {
      state.contentPost.text = null;
      state.contentPost.inputfile = null;
    },
    setNext: (state) => {
      state.next = true;
    },
    unNext: (state) => {
      state.next = false;
    },
  },
});

export const {
  setAvatar,
  unAvatar,
  setNext,
  unNext,
  setContentPost,
  unContentPost,
} = createPostSlice.actions;
export default createPostSlice.reducer;
