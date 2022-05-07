import React from "react";

const UserChat = ({ photo, username, desc, id }) => {
  return (
    <div onClick={() => console.log(id)} className="user ">
      <div className="userchat flex gap-10">
        <div className="userchat-img">
          <img src={photo} alt="" />
        </div>
        <div className="userchat-info">
          <p className="userchat-info-name colortext">{username}</p>
          <p className="userchat-info-desc colorsub">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
