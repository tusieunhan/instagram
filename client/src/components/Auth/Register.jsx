import React from "react";
import Input from "./Input";
import OrSpace from "./OrSpace";

const Register = () => {
  return (
    <div className="register">
      <div className="register-slogen">
        Sign up to see photos and videos from your friends.
      </div>
      <div className="btn btn-facebook">
        <i class="fa-brands fa-facebook-square"></i>
        Log in with Facebook
      </div>
      <OrSpace text="OR" />
      <Input placeholder="Phone number, username, or email" type="text" />
      <Input placeholder="Full Name" type="text" />
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />
      <div className="btn btn-login">Sign Up</div>
      <p className="register-desc">
        By signing up, you agree to our <span>Terms, Data Policy</span> and
        <span> Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Register;
