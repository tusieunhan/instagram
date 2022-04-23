import { createSlice } from "@reduxjs/toolkit";

export const createPostSlice = createSlice({
    name: "box",
    initialState: {
        index: 0,
        currentAvatar: ""
    },
    reducers: {
        setIndex: (state) => {
            state.index = state.index + 1;
        },
        setCurrentAvatar: (state, action) => {
            state.currentAvatar = action.payload
        }

    },
});

export const { setIndex, setCurrentAvatar } = createPostSlice.actions;
export default createPostSlice.reducer;
