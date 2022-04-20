import React, { useState } from "react";
import "../../style/auth.scss";
import Login from "./Login";
import Footer from "../Footer/Footer";
import Register from "./Register";
const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="auth flex-center">
      <div className="auth-box">
        <div className="auth-box-logo">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </div>
        {isAuth ? <Login /> : <Register />}
      </div>
      <div className="auth-switch">
        <div className="auth-switch-text flex-center gap-10">
          <p className="auth-switch-text-question">
            {isAuth ? "Don't have an account?" : "Have an account?"}
          </p>
          <p
            className="auth-switch-text-btn"
            onClick={() => setIsAuth(!isAuth)}
          >
            {isAuth ? "Sign up" : "Log in"}
          </p>
        </div>
      </div>
      <div className="auth-download">
        <p className="auth-download-title">Get the app.</p>
        <div className="auth-download-btn flex-center">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
