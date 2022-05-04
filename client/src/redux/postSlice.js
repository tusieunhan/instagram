import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {
    setPost: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    unPost: (state) => {
      state.data = null;
    },
  },
});

export const { setPost, setLoading, unPost } = postSlice.actions;
export default postSlice.reducer;
