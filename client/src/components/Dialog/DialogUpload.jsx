import React, { useEffect, useRef, useState } from "react";

const DialogUpload = () => {
  const [avatar, setAvatar] = useState();
  const [currentAvatar, setCurrentAvatar] = useState();
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(1);
  const changeInputFile = (file) => {
    let url = file.target.files;
    if (url.length === 1) {
      let avt = URL.createObjectURL(url[0]);
      setAvatar(avt);
      setCurrentAvatar(avt);
    } else {
      let arr = [];
      for (let i = 0; i < url.length; i++) {
        let avt = URL.createObjectURL(url[i]);
        arr.push(avt);
        setAvatar(arr);
        setCurrentAvatar(arr[index]);
      }
    }
  };

  console.log(avatar);
  console.log(currentAvatar);

  // const nextAvt = () => {
  //   if (index === avatar.length - 1) {
  //     document.querySelector(".btn-next").classList.add("d-none");
  //     return;
  //   } else {
  //     document.querySelector(".btn-prev").classList.remove("d-none");
  //   }
  //   setIndex((i) => i + 1);
  //   console.log(index);
  //   setCurrentAvatar(avatar[index]);
  // };
  // const prevAvt = () => {
  //   if (index === 0) {
  //     document.querySelector(".btn-prev").classList.add("d-none");
  //     return;
  //   } else {
  //     document.querySelector(".btn-next").classList.remove("d-none");
  //   }
  //   setIndex((i) => i - 1);
  //   console.log(index);

  //   setCurrentAvatar(avatar[index]);
  // };
  const handleClickInputFile = () => {
    let inputClick = document.querySelector(".uploadfile");
    inputClick.click();
  };
  return (
    <>
      <div className="dialog-upload">
        <div className="dialog-upload-header flex-between border-bottom">
          {avatar ? <i class="fa-light fa-arrow-left"></i> : <p></p>}
          <p>Create new post</p>
          {avatar ? <p>Next</p> : <p></p>}
        </div>
        <div className="dialog-upload-body flex">
          {avatar === undefined ? (
            <div className="dialog-upload-preview">
              <div className="dialog-upload-group flex">
                <div className="dialog-upload-group-icon">
                  <i className="fa-thin fa-icons"></i>
                </div>
                <div className="dialog-upload-group-title">
                  Drag photos and videos here
                </div>
                <div
                  onClick={handleClickInputFile}
                  className="dialog-upload-group-btn_input btn-input"
                >
                  <p>Select from computer</p>
                </div>

                <input
                  onChange={changeInputFile}
                  type="file"
                  multiple
                  name="uploadfile"
                  className="uploadfile"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          ) : (
            <div className="dialog-upload-preview">
              <div className="btn-next">
                <i className="fa-light fa-chevron-right"></i>
              </div>
              <div className="btn-prev">
                <i className="fa-light fa-chevron-left"></i>
              </div>
              <div className="dialog-upload-preview-img">
                <img src={currentAvatar} alt="" />
              </div>
            </div>
          )}
          <div className="dialog-upload-edit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea
            labore praesentium unde obcaecati modi suscipit blanditiis, error
            velit explicabo hic exercitationem provident porro repellendus earum
            expedita asperiores, optio corrupti.
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogUpload;
