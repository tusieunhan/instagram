import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoxConfirm } from "../../redux/boxSlice";
import {
  setAvatar,
  setContentPost,
  setNext,
  unContentPost,
  unNext,
} from "../../redux/ceatePostSlice";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const DialogUpload = () => {
  const btnNextRef = useRef();
  const btnPrevRef = useRef();
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.createPost.avatar);
  const contentPost = useSelector((state) => state.createPost.contentPost);
  const next = useSelector((state) => state.createPost.next);
  const [currentAvatar, setCurrentAvatar] = useState();
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const [index, setIndex] = useState(0);

  console.log(avatar);
  const changeInputFile = (file) => {
    dispatch(setContentPost({ ...contentPost, inputfile: file.target.value }));
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
      }
      dispatch(setAvatar(arr));
      setCurrentAvatar(arr[index]);
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

  const handleExit = () => {
    if (avatar.length >= 0) {
      dispatch(unContentPost({ text: null, inputfile: null }));
      dispatch(setBoxConfirm());
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    const { emoji } = emojiObject;
    const { text } = contentPost;
    dispatch(
      setContentPost({
        text: text + " " + emoji,
        ...contentPost.inputfile,
      })
    );

    if (event) setChosenEmoji(false);
  };

  console.log(next);
  return (
    <>
      <div className="dialog-upload">
        <div className="dialog-upload-header flex-between border-bottom">
          {avatar ? (
            next ? (
              <p onClick={() => dispatch(unNext())}>
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
              <p onClick={() => dispatch(setNext())}>Next</p>
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
              <div className="dialog-upload-edit-user ">
                <div className="dialog-upload-edit-user_img flex">
                  <img
                    src="https://i0.wp.com/s3.anhdep24.net/images/2018/04/13/81067959240a9e1c7e0_2cddf81d5df70b4e98134e25b1e23cc6.jpg"
                    alt=""
                  />
                  <div className="dialog-upload-edit-user_name">
                    <p>Vantusieunhan</p>
                  </div>
                </div>
                <div className="dialog-upload-edit-text">
                  <textarea
                    name="textedit"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write a caption ..."
                    value={contentPost?.text}
                    onChange={(e) =>
                      dispatch(
                        setContentPost({ ...contentPost, text: e.target.value })
                      )
                    }
                  ></textarea>
                </div>
                <div className="dialog-upload-edit-sub flex-between">
                  <div className="dialog-upload-edit-sub-emoji">
                    <i
                      onClick={() => setChosenEmoji(!chosenEmoji)}
                      className="fa-light fa-face-smile"
                    ></i>
                    {chosenEmoji && (
                      <div className="picker">
                        <Picker
                          disableSearchBar="no"
                          onEmojiClick={onEmojiClick}
                          disableAutoFocus={true}
                          skinTone={SKIN_TONE_MEDIUM_DARK}
                          groupNames={{ smileys_people: "PEOPLE" }}
                          native
                        />
                      </div>
                    )}
                  </div>
                  <div className="dialog-upload-edit-sub-count">
                    <p>0/2,200</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DialogUpload;
