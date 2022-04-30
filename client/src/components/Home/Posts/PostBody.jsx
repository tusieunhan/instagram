import React, { useEffect, useRef, useState } from 'react'

const PostBody = ({data,type}) => {
    const videoRef = useRef()
    const btnNextRef = useRef()
    const btnPrevRef = useRef()
    const [mute , setMute ] = useState(false)
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

    const handleMuteVideo = ()=>{
        setMute(!mute)
        if(videoRef.current.muted){
            videoRef.current.muted = false
    }   else{
        videoRef.current.muted = true
    }
  
}
  return (
    <>
        <div className='post-body'>
            <div className="post-body-img">
                {type === "image/png" || type === "image/jpg"  && <img src={data} alt="" />}
                {type === "video/mp4" && <div className="post-body-video">
                        <video autoPlay loop muted={true} ref={videoRef} playsInline src={data}></video>
                        <div onClick={handleMuteVideo} className="post-body-btn-mute">
                           {mute 
                           ? <i className="fa-solid fa-volume"></i> 
                           : <i className="fa-solid fa-volume-slash"></i> }
                        </div>
                </div>}
                    {type === "array" &&  <div className="post-body-photo">
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
                </div>}
               
            </div>
        </div>
    </>
    
  )
}

export default PostBody