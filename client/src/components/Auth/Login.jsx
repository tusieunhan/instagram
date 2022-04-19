import React from 'react'
import Input from './Input'
import OrSpace from './OrSpace'

const Login = () => {
  return (
    <div className="login">
        <Input placeholder="Phone number, username, or email"   type="text"
        />
        <Input placeholder="Password"   type="password"
        />
        <div className="btn btn-login">Log In</div>
        <OrSpace  text="OR"/>
        <div className="login-facebook flex-center">
        <i class="fa-brands fa-facebook-square"></i>
        <p>Log in with Facebook</p>
        </div>
        <p className="login-forgot">Forgot password ?</p>
    </div>
  )
}

export default Login