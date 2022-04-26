import React from 'react'

const UserSuggest = () => {
  return (
        <div className="home-suggest-follow-item flex-between">
        <div className="home-suggest-follow-user flex gap-20">
        <img src="https://reviewnao.com/wp-content/uploads/2021/11/hinh-anh-ma-cute-34.jpg" alt="" />
        <div className="home-suggest-follow-name">
        <p>vantusieunhan</p>
        <p>Follows you</p>
        </div>
    </div>
    <div className="home-suggest-user-switch">
        <p className='colorlink '>Follow</p>
    </div>
    </div>
  )
}

export default UserSuggest