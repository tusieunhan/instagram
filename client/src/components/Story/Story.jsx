import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unStory } from "../../redux/storySlice";
import "../../style/story.scss";
const Story = () => {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.data);
  const [index, setIndex] = useState(2);
  const { username, photo, storis } = story;

  console.log(username, photo);
  return (
    <div className="story">
      <div className="story-full">
        <div className="story-header flex-between">
          <a href="">
            <img
              className="story-header-img"
              src={
                "https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png"
              }
              alt=""
            />
          </a>
          <div
            onClick={() => dispatch(unStory())}
            className="story-header-times"
          >
            <i className="fa-solid fa-xmark-large"></i>
          </div>
        </div>
        <div className="story-body flex">
          <div className="story-body-content flex">
            <div className="story-body-content-img">
              <img src={storis[index]} alt="" />
              <div className="story-body-content-group flex-between">
                <div className="story-body-content-group-header">
                  <div className="story-body-content-timeline flex gap-5">
                    <div className="story-body-content-timeline-item"></div>
                    <div className="story-body-content-timeline-item"></div>
                  </div>
                  <div className="story-body-content-info flex-between">
                    <div className="story-body-content-info-user flex gap-10">
                      <img src={photo} alt="" />
                      <p className=" w-600">{username}</p>
                    </div>

                    <div className="story-body-content-info-btn flex gap-10">
                      <i className="fa-solid fa-play"></i>
                      <i className="fa-solid fa-volume-slash"></i>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
                <div className="story-body-content-group-footer flex gap-10">
                  <input type="text" placeholder="Reply to code.learn" />
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
