import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoxConfirm } from "../../redux/boxSlice";
import { setAvatar } from "../../redux/ceatePostSlice";

const DialogUpload = () => {
  const btnNextRef = useRef();
  const btnPrevRef = useRef();
  const dispatch = useDispatch()
  const avatar = useSelector(state => state.createPost.avatar)
  const [currentAvatar, setCurrentAvatar] = useState();
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(0);
  const changeInputFile = (file) => {
    let url = file.target.files;
    if (url.length === 1) {
      let avt = URL.createObjectURL(url[0]);
      dispatch(setAvatar(avt));
      setCurrentAvatar(avt);
    } else {
      let arr = [];
      for (let i = 0; i < url.length; i++) {
        let avt = URL.createObjectURL(url[i]);
        arr.push(avt);
        dispatch(setAvatar(avt));
        setCurrentAvatar(arr[index]);
      }
    }
  };
  const handleClickInputFile = () => {
    let inputClick = document.querySelector(".uploadfile");
    inputClick.click();
  };
  const btnNext = () => {
    if (index === avatar.length - 1) return;

    setIndex((i) => {
      setCurrentAvatar(avatar[i + 1]);
      return i + 1;
    });
  };

  useEffect(() => {
    if (avatar?.length !== 63 && avatar?.length >= 1) {
      console.log(index, avatar?.length - 1);
      if (index === avatar?.length - 1) {
        btnNextRef.current.style.display = "none";
        btnPrevRef.current.style.display = "block";
      } else {
        btnPrevRef.current.style.display = "block";
      }
      if (index === 0) {
        btnPrevRef.current.style.display = "none";
        btnNextRef.current.style.display = "block";
      }
    }
  }, [index, avatar?.length]);

  const btnPrev = () => {
    if (index === 0) return;

    setIndex((i) => {
      setCurrentAvatar(avatar[i - 1]);
      return i - 1;
    });
  };

  const handleExit = () =>{
    if(avatar.length >= 0){
      dispatch(setBoxConfirm())
    }
  }
  return (
    <>
      <div className="dialog-upload">
        <div className="dialog-upload-header flex-between border-bottom">
          {avatar ? (
            next ? (
              <p onClick={() => setNext(false)}>
                {" "}
                <i className="fa-light fa-arrow-left"></i>{" "}
              </p>
            ) : (
              <p onClick={handleExit}>
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
              <p onClick={() => console.log("post")}> Share</p>
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
                  <div ref={btnNextRef} onClick={btnNext} className="btn-next">
                    <i className="fa-light fa-chevron-right"></i>
                  </div>
                  <div ref={btnPrevRef} onClick={btnPrev} className="btn-prev">
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
