import React, { useState } from 'react'
import {Link  } from 'react-router-dom'
const  PostSubComment = () => {
  const [more, setMore,idPost ] = useState(false)
  return (
    <>
    <div className='post-subcomment flex gap-5'>
        <div className={`post-subcomment-name ${!more ? "textoneline" : ""} `}>
          <span className='w-600 textcolor'>code.learn </span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Fugiat cum rerum voluptate accusantium atque ex ad rem praesentium, unde commodi esse quod amet magnam officia dignissimos, id repudiandae? Laborum, maxime?</span>
        </div>
        <span onClick={()=>setMore(!more)} className='colorsub'>{!more ? "More" : " "}</span>
    
    </div>
        <Link to={`post/${idPost}`}>
          <p className="post-subcomment-viewall colorsub">
          View all comment
        </p>
        </Link>
    </>
  )
}

export default  PostSubComment