import React from 'react'
import PostBody from './PostBody'
import PostBtn from './PostBtn'
import PostHeader from './PostHeader'
import PostInputComment from './PostInputComment'
import PostSubComment from './PostSubComment'

const Post = ({data}) => {
  console.log(window)
  const {content, datapost,likecount, id, photo, type,  username} = data
  return (
    <div className='home-content-post border'>
          <PostHeader username={username} id={id} photo={photo} />
          <PostBody data={datapost} type={type} />
          <PostBtn data={likecount} />
          <PostSubComment  content={content} id={id} username={username} />
          <PostInputComment />
    </div>
  )
}

export default Post