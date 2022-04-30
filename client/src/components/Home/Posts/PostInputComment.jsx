import React, { useState } from 'react'
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const PostInputComment = () => {
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    const { emoji } = emojiObject;
    if (event) setChosenEmoji(false);
  };
  return (
    <div className='post-input flex gap-10 border-top'>
        <div className="post-input-emoji">
            <i
              onClick={() => setChosenEmoji(!chosenEmoji)}
              className="fa-regular fa-face-smile"
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
        <textarea name="" id=""  rows="1" placeholder='Add a comment ...'></textarea>
        <p className="post-input-btnpost colorlink w-600">
          Post
        </p>
    </div>
  )
}

export default PostInputComment