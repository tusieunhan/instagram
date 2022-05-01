import React from "react";
import { useDispatch } from "react-redux";
import { getStory } from "../API/storyAPI";
const AvatarStory = ({ size, idStory, photo, story }) => {
  const dispatch = useDispatch();
  const handleShowStory = () => {
    if (!story) return;
    getStory(dispatch, idStory);
  };
  if (story === true) {
    story = "isstory";
  }
  return (
    <div
      onClick={handleShowStory}
      className={`home-story-list-item-img ${size} ${story}`}
    >
      <img src={photo} alt="" />
    </div>
  );
};

export default AvatarStory;
