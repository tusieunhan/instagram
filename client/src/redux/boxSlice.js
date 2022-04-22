import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
  name: "box",
  initialState: {
    boxPost: false,
    boxNoti: false,
    boxUser: false,
    indexActive: 0,
    tabFollow: false,
  },
  reducers: {
    setTabFollow: (state) => {
      state.tabFollow = true;
    },
    setBoxPost: (state) => {
      state.boxPost = !state.boxPost;
      state.boxNoti = false;
      state.boxUser = false;
    },
    setBoxNoti: (state) => {
      state.boxNoti = !state.boxNoti;
      state.boxPost = false;
      state.boxUser = false;
    },
    setBoxUser: (state) => {
      state.boxUser = !state.boxUser;
      state.boxNoti = false;
      state.boxPost = false;
    },
    setIndexActive: (state, action) => {
      state.indexActive = action.payload;
    },
    unAllBox: (state) => {
      state.boxUser = false;
      state.boxNoti = false;
      state.boxPost = false;
      state.tabFollow = false;
    },
  },
});

export const { setBoxPost, setTabFollow, setBoxNoti, setBoxUser, unAllBox, setIndexActive } = boxSlice.actions;
export default boxSlice.reducer;
