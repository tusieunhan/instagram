import React, { memo, useState } from "react";
import Input from "./Input";
import OrSpace from "./OrSpace";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const responseFacebook = async (data) => {
    console.log(data);
  };
  const handleClickLogin = ()=>{
    
  }
  return (
    <>
      <div className="auth-box-logo">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
        />
      </div>
      <div className="login">
        <Input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Phone number, username, or email"
          type="text"
        />
        <Input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <div onClick={handleClickLogin} className="btn btn-login">Log In</div>
        <OrSpace text="OR" />
        <FacebookLogin
          appId="268395025475638"
          callback={responseFacebook}
          render={(renderProps) => (
            <div onClick={renderProps.onClick}>
              <div className="login-facebook flex-center gap-10">
                <i className="fa-brands fa-facebook-square"></i>
                <p>Log in with Facebook</p>
              </div>
            </div>
          )}
        />
        <p className="login-forgot">Forgotten your password ?</p>
      </div>
    </>
  );
};

export default memo(Login);
