import { createSlice } from "@reduxjs/toolkit";

export const createPostSlice = createSlice({
    name: "box",
    initialState: {
        avatar: undefined
    },
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload
        },
        unAvatar: (state) => {
            state.avatar = undefined
        }

    },
});

export const { setAvatar, unAvatar } = createPostSlice.actions;
export default createPostSlice.reducer;
