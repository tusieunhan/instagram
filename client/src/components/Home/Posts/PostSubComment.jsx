import React, { useState } from 'react'
import {Link  } from 'react-router-dom'
const  PostSubComment = ({id, content,username}) => {
  const [more, setMore] = useState(false)
  return (
    <>
    <div className='post-subcomment flex gap-5'>
        <div className={`post-subcomment-name ${!more ? "textoneline" : ""} `}>
          <span className='w-600 textcolor'>{username} </span>
          <span>{content}</span>
        </div>
        <span onClick={()=>setMore(!more)} className='colorsub'>{!more ? "More" : " "}</span>
    
    </div>
        <Link to={`post/${id}`}>
          <p className="post-subcomment-viewall colorsub">
          View all comment
        </p>
        </Link>
    </>
  )
}

export default  PostSubComment