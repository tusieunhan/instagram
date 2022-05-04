import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPost } from "../../../redux/postSlice";
const PostSubComment = ({ id, content, username, more2, btnView }) => {
  const [more, setMore] = useState(more2);
  const dispatch = useDispatch();
  return (
    <>
      <div className="post-subcomment flex gap-5">
        <div className={`post-subcomment-name ${!more ? "textoneline" : ""} `}>
          <span className="w-600 textcolor">{username} </span>
          <span>{content}</span>
        </div>
        <span onClick={() => setMore(!more)} className="colorsub">
          {!more ? "More" : " "}
        </span>
      </div>
      <div
        onClick={() =>
          dispatch(
            setPost({
              id: "1111122222",
              username: "Vladimir_Vladimirovich_Putin ",
              photo:
                "https://kenh14cdn.com/k:gCsVfdir6nKzzfyaqMLKcccccccccc/Image/2013/putin1-73ce3/vladimir-putin-cau-hoc-sinh-tieu-hoc-muon-lam-diep-vien.jpg",
              type: "image/jpg",
              datapost:
                "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279512876_509929104102382_7732446366305979886_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=rBdab8ZcPSYAX8JJ4Ff&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT-V4KVrXNAYFdD0asTMXode7P_S8cFIubT5lJLAoEYD9Q&oe=62783440",
              likecount: 654.001,
              comments: [
                {
                  photo:
                    "https://kenh14cdn.com/k:gCsVfdir6nKzzfyaqMLKcccccccccc/Image/2013/putin1-73ce3/vladimir-putin-cau-hoc-sinh-tieu-hoc-muon-lam-diep-vien.jpg",
                  username: "obama",
                  comment: "How to make love ?",
                },
                {
                  photo:
                    "https://kenh14cdn.com/k:gCsVfdir6nKzzfyaqMLKcccccccccc/Image/2013/putin1-73ce3/vladimir-putin-cau-hoc-sinh-tieu-hoc-muon-lam-diep-vien.jpg",

                  username: "putin",
                  comment: "You can not ",
                },
              ],
              content:
                "Theo em stalk được thì ảnh thuộc cung lửa, người Bắc, khá lowkey trên mạng xã hội, em muốn nhắn tin cưa ảnh lắm rồi nhưng mà còn hơi rén, nên em muốn hỏi mấy anh nam là con trai có để ý chuyện con gái chủ động hong ạ? Hicc đây là lần đầu em có ý định cưa người khác luôn á nên hơi bỡ ngỡ, nên có tips nào cưa crush thì mọi người cho em xin với luôn nhaa :< 😂",
            })
          )
        }
      >
        <p className="post-subcomment-viewall colorsub">
          {!btnView ? "View all comment" : " "}
        </p>
      </div>
    </>
  );
};

export default PostSubComment;
