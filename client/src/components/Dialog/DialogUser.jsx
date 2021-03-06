import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unAllBox } from "../../redux/boxSlice";
const DialogUser = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.reload();
  };
  return (
    <div className="dialog-user triangle">
      <div className="dialog-user-list">
        <Link
          onClick={() => dispatch(unAllBox())}
          to="/vantusieunhan"
          className="dialog-user-item  flex gap-10"
        >
          <i className="fa-regular fa-circle-user"></i>
          <p>Profile</p>
        </Link>
        <Link
          onClick={() => dispatch(unAllBox())}
          to="/vantusieunhan/saved"
          className="dialog-user-item  flex gap-10"
        >
          <i className="fa-regular fa-bookmark"></i>

          <p>Saved</p>
        </Link>
        <Link
          onClick={() => dispatch(unAllBox())}
          to="/accounts/edit/"
          className="dialog-user-item  flex gap-10"
        >
          <i className="fa-regular fa-gear"></i>
          <p>Setting</p>
        </Link>
        <Link
          onClick={() => dispatch(unAllBox())}
          to="/accounts/edit/"
          className="dialog-user-item  flex gap-10 border-bottom"
        >
          <i className="fa-regular fa-arrows-rotate"></i>
          <p>Switch Accounts</p>
        </Link>
        <Link
          onClick={handleLogout}
          to=""
          className="dialog-user-item  flex gap-10"
        >
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default DialogUser;
