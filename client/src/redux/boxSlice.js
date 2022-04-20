
import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
    name: "box",
    initialState: {
        boxPost: false,
        boxNoti: false,
        boxUser: false,
        prevIndex: 0
    },
    reducers: {
        setBoxPost: (state, action) => {
            state.boxNoti = !state.boxNoti;
            state.boxPost = false;
            state.boxUser = false;
            state.prevIndex = action.payload
        },
        setBoxNoti: (state, action) => {
            state.boxPost = !state.boxPost;
            state.boxNoti = false;
            state.boxUser = false;
            state.prevIndex = action.payload
        },
        setBoxUser: (state, action) => {
            state.boxUser = !state.boxUser;
            state.boxNoti = false;
            state.boxPost = false;
            state.prevIndex = action.payload
        }
    },
});

export const { setBoxPost, setBoxNoti, setBoxUser } = boxSlice.actions;
export default boxSlice.reducer;