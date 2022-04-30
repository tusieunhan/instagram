import React from 'react'

const PostBtn = () => {
  return (
    <div className="post-btn">
        <div className='post-btn-group flex-between '>
        <div className="post-btn-group_2 flex gap-20">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comment"></i>
        <i className="fa-regular fa-paper-plane"></i>
        </div>
        <div className="post-btn-group_1 flex gap-20">
        <i className="fa-regular fa-bookmark"></i>
        </div>
    </div>
    <div className="post-total flex gap-5">
        <div className="post-total-user">
            <img src="https://thuthuatnhanh.com/wp-content/uploads/2020/02/anh-icon-mat-gau-truc-dang-yeu.png" alt="" />
        </div>
        <p className="post-total-title">
            Liked by 
        </p>
        <p className="post-total-like-name colortext w-600">
            mies_duynh 
        </p>
        <p>and</p>
        <p className="post-total-like-count colortext w-600">
           668 others
        </p>
    </div>
    </div>
  )
}

export default PostBtn