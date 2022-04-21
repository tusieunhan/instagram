import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
  name: "box",
  initialState: {
    boxPost: false,
    boxNoti: false,
    boxUser: false,
    prevIndex: 0,
  },
  reducers: {
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
  },
});

export const { setBoxPost, setBoxNoti, setBoxUser } = boxSlice.actions;
export default boxSlice.reducer;
