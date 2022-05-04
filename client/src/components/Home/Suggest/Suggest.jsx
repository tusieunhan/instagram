import React from "react";
import { useSelector } from "react-redux";
import UserSuggest from "./UserSuggest";

const arrFooter = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Top Accounts",
  "Hashtags",
  "Language",
];

const Suggest = () => {
  const userRedux = useSelector((state) => state.user.user);
  const { photo, username, name } = userRedux;
  return (
    <div className="home-suggest">
      <div className="home-suggest-user flex-between">
        <div className="home-suggest-user-info flex gap-20 ">
          <img src={photo} alt="" />
          <div className="home-suggest-user-name">
            <p>{username}</p>
            <p>{name}</p>
          </div>
        </div>
        <div className="home-suggest-user-switch">
          <p className="colorlink ">Switch</p>
        </div>
      </div>
      <div className="home-suggest-title flex-between">
        <p>Suggests for you</p>
        <p>See All</p>
      </div>
      <div className="home-suggest-list">
        <UserSuggest />
        <UserSuggest />
        <UserSuggest />
        <UserSuggest />
        <UserSuggest />
      </div>
      <div className="home-suggest-footer flex ">
        {arrFooter.map((item, index) => {
          return (
            <p key={index}>
              {item} <i className="fa-solid fa-circle-small"> </i>
            </p>
          );
        })}
        <a href="facebook.com/vantusieunhan">
          <p className="home-suggest-footer-copy-right">
            © 2022 INSTAGRAM CLONE BY TU
          </p>
        </a>
      </div>
    </div>
  );
};

export default Suggest;
