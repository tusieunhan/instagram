import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import OrSpace from "./OrSpace";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import InputOption from "./InputOption";
// import { registerUser } from "../API/authAPI";

const Register = () => {
  const [isBirthday, setBirthday] = useState(true);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
    birthday: null,
  });

  console.log(user);
  const dispatch = useDispatch();
  const responseFacebook = async (data) => {
    console.log(data);
  };
  const handleRegister = () => {
    setBirthday(!isBirthday);
  };
  const birthday = [];

  const arrDay = [
    31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13,
    12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ];
  const arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const arrYear = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > 1920; i--) {
    arrYear.push(i);
  }

  const handleClickNext = () => {
    setUser({ ...user, birthday });
    console.log(user);
  };

  return (
    <>
      {isBirthday ? (
        <>
          <div className="auth-box-logo">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </div>
          <div className="register">
            <div className="register-slogen">
              Sign up to see photos and videos from your friends.
            </div>
            <FacebookLogin
              appId="268395025475638"
              callback={responseFacebook}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn btn-facebook">
                  <i className="fa-brands fa-facebook-square"></i>
                  Log in with Facebook
                </div>
              )}
            />

            <OrSpace text="OR" />
            <Input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Phone number, username, or email"
              type="text"
            />
            <Input
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Full Name"
              type="text"
            />
            <Input
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Username"
              type="text"
            />
            <Input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
              type="password"
            />
            <div onClick={handleRegister} className="btn btn-login">
              Sign Up
            </div>
            <p className="register-desc">
              By signing up, you agree to our <span>Terms, Data Policy</span>{" "}
              and
              <span> Privacy Policy</span>.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="register-brithday">
            <i className="fa-thin fa-cake-candles"></i>
            <div className="register-brithday-title">
              <p>Add Your Birthday</p>
            </div>
            <div className="register-brithday-desc">
              <p className="colortext">
                This won't be a part of your public profile.
              </p>
              <p className="colorlink">Who do i need to provide my birthday</p>
            </div>
            <div className="register-brithday-day flex-center gap-10">
              <InputOption
                listValue={arrMonth}
                onChange={(e) => (birthday[1] = e.target.value)}
              />
              <InputOption
                listValue={arrDay}
                onChange={(e) => (birthday[0] = e.target.value)}
              />
              <InputOption
                listValue={arrYear}
                onChange={(e) => (birthday[2] = e.target.value)}
              />
            </div>
            <div className="register-brithday-warning">
              <p>You need to enter the date you were born</p>
              <p>
                Use your own birthday, even if this account is for a business, a
                pet, or something else
              </p>
            </div>
            <div
              onClick={handleClickNext}
              className="btn btn-login register-brithday-btnnext"
            >
              Next
            </div>
            <p
              onClick={() => setBirthday(!isBirthday)}
              className="colorlink register-brithday-btnback"
            >
              Go back
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default memo(Register);
