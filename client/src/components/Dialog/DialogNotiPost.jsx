import React from "react";
import DialogNotiPostItem from "./DialogNotiPostItem";
import DialogAccountPrivate from "./DialogAccountPrivate";
const DialogNotiPost = () => {
  const isPrivate = true;
  return (
    <div className="dialog-notipost">
      {isPrivate && <DialogAccountPrivate />}
      <p className="dialog-time">Today</p>
      <DialogNotiPostItem />
      <DialogNotiPostItem />
      <DialogNotiPostItem />
      <DialogNotiPostItem />
      <DialogNotiPostItem />
    </div>
  );
};

export default DialogNotiPost;
