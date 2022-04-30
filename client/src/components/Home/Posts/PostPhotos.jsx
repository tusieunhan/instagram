import React, { useEffect, useRef, useState } from 'react'

const PostPhotos = ({data}) => {
    const btnNextRef = useRef()
    const btnPrevRef = useRef()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= data?.length - 1) {
          btnNextRef.current.style.display = "none";
          btnPrevRef.current.style.display = "block";
        } else {
          btnPrevRef.current.style.display = "block";
          btnNextRef.current.style.display = "block";
        }
        if (index === 0) {
          btnPrevRef.current.style.display = "none";
          btnNextRef.current.style.display = "block";
        } 
    }, [index, data?.length]);
  return (
    <div className="post-body-photo">
    <img src={data[index]} alt="" />
    <div className="post-body-photo-btn flex-between">
        <div className="btnn">
            <div onClick={()=>setIndex(index - 1 )} ref={btnPrevRef} className="post-body-btn-left">
            <i className="fa-solid fa-circle-chevron-left"></i>
            </div>
        </div>
        <div className="btnn">
            <div onClick={()=>setIndex(index+1)} ref={btnNextRef} className="post-body-btn-right">
            <i className="fa-solid  fa-circle-chevron-right"></i>
            </div>
        </div>
    </div>
</div>
  )
}

export default PostPhotos