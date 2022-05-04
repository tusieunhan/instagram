import React, { useState } from "react";
import "../../style/header.scss";
import { Link } from "react-router-dom";
import {
  setBoxNoti,
  setBoxPost,
  setBoxSearch,
  setBoxUser,
  setIndexActive,
} from "../../redux/boxSlice";
import { useDispatch, useSelector } from "react-redux";
import DialogNoti from "../Dialog/DialogNoti";
import DialogUpload from "../Dialog/DialogUpload";
import DialogUser from "../Dialog/DialogUser";
import DialogSearch from "../Dialog/DialogSearch";
const Header = () => {
  const dispatch = useDispatch();
  const boxRedux = useSelector((state) => state.box);
  const { boxNoti, boxPost, boxSearch, boxUser } = boxRedux;
  const userRedux = useSelector((state) => state.user.user);
  const { photo } = userRedux;
  console.log(userRedux);
  const [index, setIndex] = useState(boxRedux.indexActive);
  const [textSearch, setTextSearch] = useState("");
  const btnLink = document.querySelectorAll(".header-center-group .link i");
  btnLink.forEach((item, index) => {
    item.onclick = () => {
      setIndex(index);
      document
        .querySelector(".fa-solid.fa-regular")
        .classList.remove("fa-solid");
      item.classList.add("fa-solid");
    };
  });

  let item = document.querySelector(".fa-solid.fa-regular");

  const handleClickBoxPost = () => {
    dispatch(setBoxPost());
    dispatch(setIndexActive(index));
    if (item) {
      item.classList.remove("fa-solid");
    }
  };
  const handleClickBoxNoti = () => {
    dispatch(setBoxNoti());
    dispatch(setIndexActive(index));
    if (item) {
      item.classList.remove("fa-solid");
    }
  };
  const handleClickBoxUSer = () => {
    dispatch(setBoxUser());
    dispatch(setIndexActive(index));
    if (item) {
      item.classList.remove("fa-solid");
    }
  };
  return (
    <div className="header">
      <div className="header-center">
        <a href="/">
          <div className="header-center-logo flex">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt=""
            />
          </div>
        </a>
        <div className="center">
          <div className="header-center-search flex-center">
            <input
              type="text"
              placeholder="Search"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              onFocus={() => dispatch(setBoxSearch())}
            />
            <i className="btn-search fa-regular fa-magnifying-glass"></i>
            {textSearch !== "" ? (
              <i
                onClick={() => setTextSearch("")}
                className="btn-times fa-solid fa-circle-x"
              ></i>
            ) : (
              ""
            )}
            {/* {box.boxPost && <DialogUpload />} */}
          </div>
          {boxPost && <DialogUpload />}
          {boxSearch && <DialogSearch />}
        </div>
        <div className="header-center-group flex">
          <Link className="link" to="/">
            <i className=" fa-regular fa-solid fa-house"></i>
          </Link>
          <Link className="link" to="/inbox">
            <i className="fa-regular fa-comment"></i>
          </Link>
          <i
            className={`fa-regular fa-square-plus ${
              boxPost ? "fa-solid" : " "
            }`}
            onClick={handleClickBoxPost}
          ></i>
          <Link className="link" to="/explore">
            <i className="fa-regular fa-compass"></i>
          </Link>
          <i
            className={`fa-regular fa-heart ${boxNoti ? "fa-solid" : " "}`}
            onClick={handleClickBoxNoti}
          ></i>
          {boxNoti && <DialogNoti />}
          <div className="header-center-img" onClick={handleClickBoxUSer}>
            <img src={photo} alt="" />
            <div className={`imgBorder ${boxUser ? "imgActive" : " "}`}></div>
          </div>
          {boxUser && <DialogUser />}
        </div>
      </div>
    </div>
  );
};

export default Header;
