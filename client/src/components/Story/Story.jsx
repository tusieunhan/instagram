import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unStory } from "../../redux/storySlice";
import "../../style/story.scss";
const Story = () => {
  const dispatch = useDispatch();
  const btnNextRef = useRef();
  const btnPrevRef = useRef();
  const timelineRef = useRef();
  const dataStory = useSelector((state) => state.story.data);
  const [index, setIndex] = useState(0);
  const { username, photo, storis } = dataStory;
  const {type ,content} = storis[index]
  let timer;
  let delay = 6000;
  useEffect(() => {
    const checkType = ()=>{
      if(type ==="video/mp4"){
        delay = 20000
      }else{
        delay = 6000
      }
    }
    checkType()
  }, [type])
  
  useEffect(() => {
    if (index >= storis?.length - 1) {
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
    let timeline = document.querySelectorAll('.timelineAmimation')
    timeline[index].classList.add("timelineActive")
    timer =  setTimeout(() => {
      handleClickNext()
    }, delay);
    return ()=> clearTimeout(timer)
  }, [index, storis?.length]);

  const handleClickPrev = ()=>{
    if (index === 0) return;
    setIndex(index - 1)
    let timeline = document.querySelectorAll('.timelineAmimation')
    timeline[index].classList.remove("timelineActive")
  }
  const handleClickNext =()=>{
    if (index >= storis?.length - 1) return
    setIndex(index + 1)
  }
  return (
    <div className="story">
      <div className="story-full">
        <div className="story-header flex-between">
          <a href="">
            <img
              className="story-header-img"
              src={
                "https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png"
              }
              alt=""
            />
          </a>
          <div
            onClick={() => dispatch(unStory())}
            className="story-header-times"
          >
            <i className="fa-solid fa-xmark-large"></i>
          </div>
        </div>
        <div className="story-body flex">
          <div className="story-body-content flex">
            <div className="story-body-content-img">
              {type === "image/jpg" && <img src={content} alt="" /> }
              {type === "video/mp4" && <video autoPlay playsInline  src={content} alt="" /> }
              
              <div className="story-body-content-group flex-between">
                <div className="story-body-content-group-header">
                  <div className="story-body-content-timeline flex gap-5">

                    {storis?.map((index)=><div key={index}  className="story-body-content-timeline-item"><div  ref={timelineRef} className="timelineAmimation"></div></div>)}

                  </div>
                  <div className="story-body-content-info flex-between">
                    <div className="story-body-content-info-user flex gap-10">
                      <img src={photo} alt="" />
                      <p className=" w-600">{username}</p>
                    </div>

                    <div className="story-body-content-info-btn flex gap-10">
                      <i className="fa-solid fa-play"></i>
                      <i className="fa-solid fa-volume-slash"></i>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
                <div className="story-body-content-group-footer flex gap-20">
                  <input type="text" placeholder="Reply to code.learn" />
                  <i className="fa-regular fa-heart"></i>
                  <i className=" story-body-content-group-footer-fix  fa-regular fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="story-body-content-btn flex-between">
            <div className="btnn">
              <div
                onClick={handleClickPrev}
                ref={btnPrevRef}
                className="story-body-content-btn-left"
              >
                <i className="fa-solid fa-circle-chevron-left"></i>
              </div>
            </div>
            <div className="btnn">
              <div
                onClick={handleClickNext}
                ref={btnNextRef}
                className="story-body-content-btn-right"
              >
                <i className="fa-solid  fa-circle-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
