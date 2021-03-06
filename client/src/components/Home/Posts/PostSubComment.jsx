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
                "Theo em stalk ???????c th?? ???nh thu???c cung l???a, ng?????i B???c, kh?? lowkey tr??n m???ng x?? h???i, em mu???n nh???n tin c??a ???nh l???m r???i nh??ng m?? c??n h??i r??n, n??n em mu???n h???i m???y anh nam l?? con trai c?? ????? ?? chuy???n con g??i ch??? ?????ng hong ???? Hicc ????y l?? l???n ?????u em c?? ?? ?????nh c??a ng?????i kh??c lu??n ?? n??n h??i b??? ng???, n??n c?? tips n??o c??a crush th?? m???i ng?????i cho em xin v???i lu??n nhaa :< ????",
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
