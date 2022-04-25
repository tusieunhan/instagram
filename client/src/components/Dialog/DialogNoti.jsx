import React from "react";
import { useSelector } from "react-redux";
import DialogNotiPost from "./DialogNotiPost";
import DialogNotiFollow from "./DialogNotiFollow";

const DialogNoti = () => {
  const tabFollow = useSelector((state) => state.box.tabFollow);
  return (
    <div className="dialog-noti triangle">
      <div className="dialog-noti2 ">
        {tabFollow ? <DialogNotiFollow /> : <DialogNotiPost />}
      </div>
    </div>
  );
};

export default DialogNoti;
