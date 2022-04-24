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
  const handleClickInputFile = () => {
    let inputClick = document.querySelector(".uploadfile");
    inputClick.click();
  };

  console.log(avatar);
  return (
    <>
      <div className="dialog-upload">
        <div className="dialog-upload-header flex-between border-bottom">
          {/* {avatar ? <i className="fa-light fa-arrow-left"></i> : <p></p>} */}
          {avatar ? (
            next ? (
              <p onClick={() => setNext(false)}>
                {" "}
                <i className="fa-light fa-arrow-left"></i>{" "}
              </p>
            ) : (
              <p onClick={() => console.log("true")}>
                {" "}
                <i className="fa-light fa-arrow-left"></i>{" "}
              </p>
            )
          ) : (
            <p></p>
          )}
          <p>Create new post</p>
          {avatar ? (
            next ? (
              <p onClick={() => console.log("true")}> Share</p>
            ) : (
              <p onClick={() => setNext(true)}>Next</p>
            )
          ) : (
            <p></p>
          )}
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
              {avatar?.length === 63 ? (
                " "
              ) : (
                <>
                  <div className="btn-next">
                    <i className="fa-light fa-chevron-right"></i>
                  </div>
                  <div className="btn-prev">
                    <i className="fa-light fa-chevron-left"></i>
                  </div>
                </>
              )}

              <div className="dialog-upload-preview-img">
                <img src={currentAvatar} alt="" />
              </div>
            </div>
          )}
          {next && (
            <div className="dialog-upload-edit">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                similique sint, repellat adipisci soluta dolore nemo libero non
                placeat ipsam tenetur distinctio iusto deleniti. Repudiandae
                libero laborum ipsam adipisci ipsum!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DialogUpload;
