import React from "react";
import "../../style/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const btnLink = document.querySelectorAll(".header-center-group i");
  btnLink.forEach((item, index) => {
    item.onclick = () => {
      document
        .querySelector(".fa-solid.fa-regular")
        .classList.remove("fa-solid");
      item.classList.add("fa-solid");
    };
  });
  return (
    <div className="header">
      <div className="header-center">
        <div className="header-center-logo flex">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
          />
        </div>
        <div className="header-center-search flex-center">
          <input type="text" placeholder="Search" />
          <i className="btn-search fa-regular fa-magnifying-glass"></i>
        </div>
        <div className="header-center-group flex">
          <Link to="/">
            <i className=" fa-regular fa-solid fa-house"></i>
          </Link>
          <Link to="/inbox">
            <i className="fa-regular fa-comment"></i>
          </Link>
          <i className="fa-regular fa-square-plus"></i>
          <Link to="/trend">
            <i className="fa-regular fa-compass"></i>
          </Link>
          <i className="fa-regular fa-heart"></i>
          <div className="header-center-img">
            <img
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/240826453_2975993636023115_4454241435896868815_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=gCbv6kbpAQUAX_1Mzwz&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-Tl_Oph2vRw4FcjP-OLNYpp3obPYLa1Ksydb4vtoFT1g&oe=6263F525"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
