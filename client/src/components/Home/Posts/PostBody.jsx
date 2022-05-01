import React, { useEffect, useRef, useState } from "react";
import PostPhotos from "./PostPhotos";

const PostBody = ({ data, type }) => {
  const videoRef = useRef();
  const [mute, setMute] = useState(false);
  const handleMuteVideo = () => {
    setMute(!mute);
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
  };
  return (
    <>
      <div className="post-body">
        <div className="post-body-img">
          {type === "image/png" ||
            (type === "image/jpg" && <img src={data} alt="" />)}
          {type === "video/mp4" && (
            <div className="post-body-video">
              <video
                autoPlay
                loop
                muted={true}
                ref={videoRef}
                playsInline
                src={data}
              ></video>
              <div onClick={handleMuteVideo} className="post-body-btn-mute">
                {mute ? (
                  <i className="fa-solid fa-volume"></i>
                ) : (
                  <i className="fa-solid fa-volume-slash"></i>
                )}
              </div>
            </div>
          )}
          {type === "array" && <PostPhotos data={data} />}
        </div>
      </div>
    </>
  );
};

export default PostBody;
