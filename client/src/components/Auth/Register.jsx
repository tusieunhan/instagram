import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import OrSpace from "./OrSpace";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import InputOption from "./InputOption";
import { registerUser, verifyCode } from "../API/authAPI";
import { setBirthday, setCode } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);
  const { isCode, loading, isBirthday, notiRegister } = userRedux;
  const [codeNumber, setCodeNumber] = useState();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
    dayofbrith: "",
    monthofbirth: "",
    yearofbirth: "",
  });

  const responseFacebook = async (data) => {
    console.log(data);
  };

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

  const handleClickSignup = () => {
    dispatch(setBirthday());
  };
  const handleClickNext = () => {
    registerUser(dispatch, user);
  };
  const handleExit = () => {
    dispatch(setCode({ code: false }));
    dispatch(setBirthday());
  };
  const handleClickVerify = () => {
    verifyCode(navigate, dispatch, {
      username: user["username"],
      code: codeNumber,
    });
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
            <div onClick={handleClickSignup} className="btn btn-login">
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
        <div className="register-brithday">
          {!isCode ? (
            <>
              <i className="fa-thin fa-cake-candles"></i>
              <div className="register-brithday-title">
                <p>Add Your Birthday</p>
              </div>
              <div className="register-brithday-desc">
                <p className="colortext">
                  This won't be a part of your public profile.
                </p>
                <p className="colorlink">
                  Who do i need to provide my birthday
                </p>
              </div>

              <div className="register-brithday-day flex-center gap-10">
                <InputOption
                  listValue={arrMonth}
                  onChange={(e) =>
                    setUser({ ...user, dayofbrith: e.target.value })
                  }
                />
                <InputOption
                  listValue={arrDay}
                  onChange={(e) =>
                    setUser({ ...user, monthofbrith: e.target.value })
                  }
                />
                <InputOption
                  listValue={arrYear}
                  onChange={(e) =>
                    setUser({ ...user, yearofbrith: e.target.value })
                  }
                />
              </div>
              <div className="register-brithday-warning">
                <p>You need to enter the date you were born</p>
                <p>
                  Use your own birthday, even if this account is for a business,
                  a pet, or something else
                </p>
              </div>
              <div
                onClick={handleClickNext}
                className="btn btn-login register-brithday-btnnext"
              >
                Next {loading ? "loading..." : " "}
              </div>
              <div
                onClick={handleExit}
                className="register-brithday-btnback colorlink"
              >
                Go back
              </div>
              <br />
              {notiRegister ? (
                <p className="noti colorred">{notiRegister}</p>
              ) : (
                " "
              )}
            </>
          ) : (
            <>
              <i class="fa-thin fa-envelope-circle-check"></i>
              <div className="register-brithday-title">
                <p>Enter Confirmation Code</p>
              </div>
              <div className="register-brithday-desc">
                <p className="colortext">
                  `Enter the confirmation code we sent to {user.email}`
                </p>
                <p className="colorlink">Resend code</p>
              </div>
              <div className="register w-full verify-fix">
                <Input
                  onChange={(e) => setCodeNumber(e.target.value)}
                  placeholder="Confirm code"
                  type="text"
                />
              </div>
              <div
                onClick={handleClickVerify}
                className="btn btn-login register-brithday-btnnext"
              >
                Next {loading ? "loading..." : " "}
              </div>
              <div
                onClick={handleExit}
                className="register-brithday-btnback colorlink"
              >
                Go back
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default memo(Register);
