import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import box from "./boxSlice";

export default configureStore({
    reducer: {
        user: user,
        box: box,
    },
});