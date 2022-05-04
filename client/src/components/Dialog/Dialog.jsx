import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoxConfirm, unAllBox } from "../../redux/boxSlice";

import "../../style/dialog.scss";

const Dialog = ({ overlay, times, zIndex }) => {
  const dispatch = useDispatch();
  const indexActive = useSelector((state) => state.box.indexActive);
  const avatar = useSelector((state) => state.createPost.avatar);

  const btnLink = document.querySelectorAll(".header-center-group .link i");

  const handleClickDialog = () => {
    if (avatar?.length >= 1) {
      dispatch(setBoxConfirm());
      return;
    }
    dispatch(unAllBox());

    btnLink[indexActive].classList.add("fa-solid");
  };

  const countIndex = zIndex ? 3 : 0;

  return (
    <div
      style={{ zIndex: `${countIndex}` }}
      onClick={handleClickDialog}
      className={`dialog flex ${overlay ? "overlay" : ""}`}
    >
      {times && <i className="dialog-btn_times fa-solid fa-xmark-large"></i>}
    </div>
  );
};

export default Dialog;
