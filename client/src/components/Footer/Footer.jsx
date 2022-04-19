import React from "react";
import "../../style/footer.scss";
const Footer = () => {
  const arrFooter = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top",
    "accounts",
    "Hashtags",
    "Locations",
    "Instagram",
    "Lite",
  ];
  return (
    <div className="footer">
      <div className="footer-top flex-center gap-20">
        {arrFooter?.map((item, index) => {
          return (
            <p key={index} className="footer-text ">
              {item}
            </p>
          );
        })}
      </div>
      <div className="footer-bottom flex-center gap-20">
        <p className="footer-text ">English</p>
        <p className="footer-text ">© 2022 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Footer;
