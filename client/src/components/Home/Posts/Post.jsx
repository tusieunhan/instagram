import React from "react";
import PostBody from "./PostBody";
import PostBtn from "./PostBtn";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";
import PostInputComment from "./PostInputComment";
import PostSubComment from "./PostSubComment";

const Post = ({ data, dialogPost }) => {
  const { content, datapost, likecount, id, photo, type, username } = data;
  return (
    <>
      {!dialogPost ? (
        <div className="home-content-post border  ">
          <PostHeader username={username} id={id} photo={photo} />
          <PostBody data={datapost} type={type} classbody="posts-hieght" />
          <PostBtn data={likecount} />
          <PostSubComment content={content} id={id} username={username} />
          <PostInputComment />
        </div>
      ) : (
        <div className="home-content-post border">
          <div className="dialogpost-container flex-center">
            <div className="post-group flex-center">
              <div className="post-item_1">
                <PostBody data={datapost} type={type} />
              </div>
              <div className="post-item_2 flex">
                <div className="post-item-header ">
                  <PostHeader username={username} id={id} photo={photo} />
                  <div className="post-item-body">
                    <PostSubComment
                      content={content}
                      id={id}
                      username={username}
                      more2={true}
                      btnView
                    />
                    <PostComment />
                  </div>
                </div>
                <div className="post-item-footer">
                  <PostBtn data={likecount} border />
                  <PostInputComment />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
