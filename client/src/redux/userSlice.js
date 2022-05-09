import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    isCode: false,
    isBirthday: true,
    notiRegister: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setCode: (state, action) => {
      state.isCode = action.payload;
      state.notiRegister = action.payload.message;
    },
    setBirthday: (state) => {
      state.isBirthday = !state.isBirthday;
    },

    setNotiRegister: (state, action) => {
      state.notiRegister = action.payload;
    },
  },
});

export const {
  setUser,
  setLoading,
  setCode,
  setBirthday,
  backLogin,
  setNotiRegister,
} = userSlice.actions;
export default userSlice.reducer;
