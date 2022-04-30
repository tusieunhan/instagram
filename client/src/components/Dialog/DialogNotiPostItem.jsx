import React from "react";
import AvatarStory from "../Avatar/AvatarStory";

const DialogNotiPostItem = () => {
  return (
    <>
      <div className="dialog-notipost-btn gap-10 flex">
        
        <div className="dialog-notipost-item-text flex gap-5">
        <AvatarStory size={"img-md-sm"} photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa81NT0cfFGI-geFewuerTzRtpcj-PalEsnA&usqp=CAU" idStory={"aaa"} story=" " />
            <p className="dialog-notipost-item-name">Follow Request</p>
            <p className="dialog-notipost-item-noti"> liked your photo.</p>
            <p className="dialog-notipost-item-time">1h</p>
        </div>
        <div className="dialog-notipost-item-btn flex ">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/247980222_2671566743139057_7798704004373310214_n.jpg?stp=dst-jpg_p206x206&_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=nLoTKUVVDrMAX_gdXQS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKwVDBOoPm_lOUHa_SZWfybsIClZstomBWuKfcItP7oPA&oe=6288C3E4"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default DialogNotiPostItem;
