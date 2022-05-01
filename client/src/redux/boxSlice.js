import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
  name: "box",
  initialState: {
    boxConfirm: false,
    boxPost: false,
    boxSearch: false,
    boxNoti: false,
    boxUser: false,
    indexActive: 0,
    tabFollow: false,
  },
  reducers: {
    setBoxConfirm: (state) => {
      state.boxConfirm = !state.boxConfirm;
    },
    setTabFollow: (state) => {
      state.tabFollow = true;
    },
    setBoxSearch: (state) => {
      state.boxSearch = true;
      state.boxNoti = false;
      state.boxUser = false;
      state.boxPost = false;
    },
    setBoxPost: (state) => {
      state.boxPost = !state.boxPost;
      state.boxNoti = false;
      state.boxUser = false;
      state.boxSearch = false;
    },
    setBoxNoti: (state) => {
      state.boxNoti = !state.boxNoti;
      state.boxPost = false;
      state.boxUser = false;
      state.boxSearch = false;
    },
    setBoxUser: (state) => {
      state.boxUser = !state.boxUser;
      state.boxNoti = false;
      state.boxPost = false;
      state.boxSearch = false;
    },
    setIndexActive: (state, action) => {
      state.indexActive = action.payload;
    },
    unAllBox: (state) => {
      state.boxUser = false;
      state.boxNoti = false;
      state.boxPost = false;
      state.tabFollow = false;
      state.boxSearch = false;
    },
    unConfirm: (state) => {
      state.boxConfirm = false;
    },
  },
});

export const {
  setBoxPost,
  setTabFollow,
  setBoxNoti,
  setBoxUser,
  unAllBox,
  setIndexActive,
  setBoxSearch,
  setBoxConfirm,
  unConfirm,
} = boxSlice.actions;
export default boxSlice.reducer;
