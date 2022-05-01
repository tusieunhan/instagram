import React from "react";

const PostBtn = ({ data }) => {
  return (
    <div className="post-btn">
      <div className="post-btn-group flex-between ">
        <div className="post-btn-group_2 flex gap-20">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <div className="post-btn-group_1 flex gap-20">
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div className="post-total flex gap-5">
        <p className="post-total-like-count colortext w-600">{data} likes</p>
      </div>
    </div>
  );
};

export default PostBtn;
