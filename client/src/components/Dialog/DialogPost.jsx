import React from "react";
import Post from "../Home/Posts/Post";
import "../../style/post.scss";
import { unPost } from "../../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
const DialogPost = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.data);
  console.log(data);
  return (
    <>
      <div className="dialog-full flex-center">
        <div className="dialog-post">
          <Post data={data} dialogPost />
        </div>
        <div onClick={() => dispatch(unPost())} className="dialog-click"></div>
      </div>
    </>
  );
};

export default DialogPost;
