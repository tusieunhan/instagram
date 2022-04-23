import React, { useState } from "react";

const DialogUpload = () => {
  const [avatar, setAvatar] = useState();
  const [next, setNext] = useState(false);
  const changeInputFile = (file) => {
    const url = file.target.files[0];
    let avt = URL.createObjectURL(url);
    setAvatar(avt);
  };

  const handleClickInputFile = () => {
    let inputClick = document.querySelector(".uploadfile");
    inputClick.click();
  };

  return (
    <>
      {!next ? (
        <div className="dialog-upload">
          <div className="dialog-upload-header border-bottom flex-between">
            <p onClick={() => setAvatar("")}>
              {avatar ? <i className="fa-light fa-arrow-left"></i> : " "}
            </p>
            <p className="colortext">Create new post</p>
            <p onClick={() => setNext(true)} className="colorlink">
              {avatar ? "Next" : " "}
            </p>
          </div>
          {avatar ? (
            <img className="dialog-upload-img" src={avatar} />
          ) : (
            <div className="dialog-upload-body ">
              <i className="fa-thin fa-icons"></i>
              <p>Drag photos and videos here</p>
              <div className="btn-input" onClick={handleClickInputFile}>
                <p>Select from computer</p>
              </div>
              <input
                type="file"
                multiple
                name="uploadfile"
                className="uploadfile"
                onChange={changeInputFile}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="dialog-upload-edit ">
          <div className="dialog-upload-header border-bottom flex-between">
            <p onClick={() => setNext(false)}>
              {avatar ? <i class="fa-light fa-arrow-left"></i> : " "}
            </p>
            <p className="colortext">Create new post</p>
            <p onClick={() => console.log("aaa")} className="colorlink">
              {avatar ? "Next" : " "}
            </p>
          </div>
          <div className="dialog-upload-edit-body flex">
            <img className="dialog-upload-edit-img" src={avatar} />
            <div className="dialog-upload-edit-newpost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              numquam suscipit illo impedit nobis maxime harum quam alias culpa
              at consectetur nostrum modi expedita praesentium voluptatibus ea
              placeat. Eos, a.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogUpload;
