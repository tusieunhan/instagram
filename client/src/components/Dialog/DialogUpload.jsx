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
    <div className="dialog-upload">
      <div className="dialog-upload-header border-bottom flex-between">
        <p>{avatar ? <i class="fa-light fa-arrow-left"></i> : " "}</p>
        <p className="colortext">{avatar ? "Edit" : "Create new post"}</p>
        <p className="colorlink">{avatar ? "Next" : " "}</p>
      </div>
      {avatar ? (
        <img className="dialog-upload-img" src={avatar} />
      ) : (
        <div className="dialog-upload-body">
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
  );
};

export default DialogUpload;
