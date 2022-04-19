
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "music",
    initialState: {
        user: {
            currentUser: [],
            friends: [],
            musicFav: [],
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;