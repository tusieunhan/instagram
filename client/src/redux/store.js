import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import box from "./boxSlice";
import createPost from "./ceatePostSlice";

export default configureStore({
    reducer: {
        user: user,
        box: box,
        createPost: createPost,
    },
});