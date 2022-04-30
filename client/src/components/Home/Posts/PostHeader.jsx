import React from 'react'
import AvatarStory from '../../Avatar/AvatarStory'

const PostHeader = () => {
  return (
    <>
    <div className="post-header   flex-between">
        <div className="post-user flex text-center gap-10">
            <AvatarStory photo={"https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/279083100_498535511951431_4569358352973244502_n.jpg?stp=dst-jpg_s640x640&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YirAUL9a9QcAX9dm8bI&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT-8HsYQv1-MGXT-Y_nauJMwgGaHuAJDJdLByLVFolf-TQ&oe=62725BCD"} size="img-sm" story idStory={"ssss"} />
            <p className='w-600'>Code_learn</p>
        </div>
        <div className="post-header-btn">
        <i className="fa-regular fa-ellipsis"></i>
        </div>
</div>
    </>
  )
}

export default PostHeader