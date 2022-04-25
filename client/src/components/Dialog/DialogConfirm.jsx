import React from "react";
import { useDispatch } from "react-redux";
import { unAllBox, unConfirm } from "../../redux/boxSlice";
import { unAvatar, unContentPost, unNext } from "../../redux/ceatePostSlice";
import "../../style/header.scss";
const DialogConfirm = () => {
  const dispatch = useDispatch();
  const handleDiscard = () => {
    dispatch(unContentPost());
    dispatch(unNext());
    dispatch(unAvatar());
    dispatch(unConfirm());
  };
  return (
    <div className="confirm">
      <div className="confirm-content">
        <div className="confirm-exitpost">
          <div className="confirm-exitpost-title border-bottom">
            <p>Discard post?</p>
            <p>If you leave, your edits won't be saved.</p>
          </div>
          <div
            onClick={handleDiscard}
            className="confirm-exitpost-discard border-bottom"
          >
            <p> Discard</p>
          </div>
          <div
            onClick={() => dispatch(unConfirm())}
            className="confirm-exitpost-cancel"
          >
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogConfirm;
