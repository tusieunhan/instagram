import React from 'react'
import PostBody from './PostBody'
import PostBtn from './PostBtn'
import PostHeader from './PostHeader'
import PostInputComment from './PostInputComment'
import PostSubComment from './PostSubComment'

const Post = () => {

    const listphoto = ["https://i.pinimg.com/474x/91/e7/a2/91e7a29f1e29bf997e91f3adf01da334.jpg","https://i.pinimg.com/474x/e3/0a/6d/e30a6deb86a1245b149ad587d7a80ae5.jpg","https://i.pinimg.com/474x/78/47/4a/78474ade4e871fd6d43aa4d60a34e5fb.jpg"]
  return (
    <div className='home-content-post border'>
          <PostHeader />
          <PostBody data={listphoto} type="array" />
          <PostBtn />
          <PostSubComment />
          <PostInputComment />
    </div>
  )
}

export default Post