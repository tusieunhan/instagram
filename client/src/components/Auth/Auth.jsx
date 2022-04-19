import React, { useState } from 'react'
import '../../style/auth.scss'
import Login from './Login'
import Register from './Register'
const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    
    <div className="auth">
      <div className="auth-box">
        <div className="auth-box-logo">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </div>
        <Login/>
      </div>
      <div className="auth-switch">
        <div className="auth-switch-text flex-center">
          Don't have an account? &nbsp;
          <p className="auth-switch-text-btn">
             Sign up
          </p>
        </div>
      </div>
      <div className="auth-dowload">
        <p className="auth-dowload-title">
          Get the app.
        </p>
        <div className="auth-dowload-btn flex-center">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Auth