import React from 'react'
const AvatarStory = ({size, idStory,photo,story}) => {
    const handleShowStory = ()=>{
       if(!story) return;
       console.log("story",idStory) 
    }
    if(story === true){
        story = "isstory"
    }
  return (
       
        <div onClick={handleShowStory} className={`home-story-list-item-img ${size} ${story}`}>
            <img
                src={photo}
                alt=""
            />
        </div>
       
  )
}

export default AvatarStory