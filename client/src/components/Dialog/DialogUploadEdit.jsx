import React, { useState } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { setContentPost } from "../../redux/ceatePostSlice";
import { useDispatch, useSelector } from "react-redux";

const DialogUploadEdit = () => {
  const dispatch = useDispatch();
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const contentPost = useSelector((state) => state.createPost.contentPost);
  const onEmojiClick = (event, emojiObject) => {
    const { emoji } = emojiObject;
    const { text } = contentPost;

    dispatch(setContentPost({ ...contentPost, text: text + " " + emoji }));
    if (event) setChosenEmoji(false);
  };
  return (
    <div className="dialog-upload-edit">
      <div className="dialog-upload-edit-user border-bottom">
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
              dispatch(setContentPost({ ...contentPost, text: e.target.value }))
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
      <div className="dialog-upload-edit-location border-bottom flex-between">
        <input
          onChange={(e) =>
            dispatch(
              setContentPost({ ...contentPost, location: e.target.value })
            )
          }
          type="text"
          placeholder="Add location"
          name="location"
        />
        <i className="fa-regular fa-location-dot"></i>
      </div>
      <div className="dialog-upload-edit-location border-bottom flex-between">
        <p>Accessibility</p>
        <i className="fa-light fa-chevron-down"></i>
      </div>
      <div className="dialog-upload-edit-location border-bottom flex-between">
        <p>Advanced settings</p>
        <i className="fa-light fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default DialogUploadEdit;
