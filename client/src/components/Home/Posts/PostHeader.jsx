import React from 'react'
import AvatarStory from '../../Avatar/AvatarStory'

const PostHeader = ({username, id,photo}) => {
  return (
    <>
    <div className="post-header   flex-between">
        <div className="post-user flex text-center gap-10">
            <AvatarStory photo={photo} size="img-sm" story idStory={"ssss"} />
            <p className='w-600'>{username}</p>
        </div>
        <div className="post-header-btn">
        <i onClick={()=>console.log(id)} className="fa-regular fa-ellipsis"></i>
        </div>
</div>
    </>
  )
}

export default PostHeader