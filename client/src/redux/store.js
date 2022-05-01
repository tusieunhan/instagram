import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import box from "./boxSlice";
import createPost from "./ceatePostSlice";
import story from "./storySlice";

export default configureStore({
  reducer: {
    user: user,
    box: box,
    createPost: createPost,
    story: story,
  },
});
