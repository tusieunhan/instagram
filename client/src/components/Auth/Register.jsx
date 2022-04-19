import React, { memo, useState } from "react";
import { useDispatch } from "react-redux"
import Input from "./Input";
import OrSpace from "./OrSpace";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { registerUser } from "../API/authAPI";

const Register = () => {
  const [user, setUser] = useState({ email: '', username: '', password: "", name: '' })
  const dispatch = useDispatch()
  const responseFacebook = async (data) => {
    console.log(data)
  }
  const handleRegister =()=>{
    console.log("clicK")
    registerUser(dispatch,user)
  }
  return (
    <div className="register">
      <div className="register-slogen">
        Sign up to see photos and videos from your friends.
      </div>
      <FacebookLogin
        appId="268395025475638"
        callback={responseFacebook}
        render={renderProps => (
          <div onClick={renderProps.onClick} className="btn btn-facebook">
            <i className="fa-brands fa-facebook-square"></i>
            Log in with Facebook
          </div>
        )}
      />

      <OrSpace text="OR" />
      <Input onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Phone number, username, or email" type="text" />
      <Input onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Full Name" type="text" />
      <Input onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Username" type="text" />
      <Input onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" type="password" />
      <div onClick={handleRegister} className="btn btn-login">Sign Up</div>
      <p className="register-desc">
        By signing up, you agree to our <span>Terms, Data Policy</span> and
        <span> Privacy Policy</span>.
      </p>
    </div>
  );
};

export default memo(Register);
