import React from "react";

import "swiper/css";
import ListStory from "./ListStory";
import Post from "./Post";
const Posts = () => {
  const posts = [
    {
      id: "1111122222",
      username: "Elon_musk",
      photo:
        "https://static-images.vnncdn.net/files/publish/elon-musk-khang-dinh-vi-the-nguoi-quyen-luc-nhat-the-gioi-1d06f24b50144b528f3471d87545e53b.jpg",
      type: "image/jpg",
      datapost:
        "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-nen-dien-thoai-6.jpg",
      likecount: 654,
      comments: [
        { username: "obama", comment: "How to make love ?" },
        {
          username: "putin",
          comment: "You can not ",
        },
      ],
      content:
        "Dạ xin chào mọi ngườii. Chuyện là em có để ý một anh kia, vibe mạnh mẽ đúng gu em luôn, em có tìm thấy và add FB ảnh rồi nhưng mà chưa dám bắt chuyện (ảnh còn hong biết em là ai luôn á). 😂",
    },
    {
      id: "1111122222",
      username: "Vladimir_Vladimirovich_Putin ",
      photo:
        "https://kenh14cdn.com/k:gCsVfdir6nKzzfyaqMLKcccccccccc/Image/2013/putin1-73ce3/vladimir-putin-cau-hoc-sinh-tieu-hoc-muon-lam-diep-vien.jpg",
      type: "video/mp4",
      datapost:
        "https://f21-zvc.zdn.vn/b891b06e117df923a06c/2716881022028454244",
      likecount: 654,
      comments: [
        { username: "obama", comment: "How to make love ?" },
        {
          username: "putin",
          comment: "You can not ",
        },
      ],
      content:
        "Theo em stalk được thì ảnh thuộc cung lửa, người Bắc, khá lowkey trên mạng xã hội, em muốn nhắn tin cưa ảnh lắm rồi nhưng mà còn hơi rén, nên em muốn hỏi mấy anh nam là con trai có để ý chuyện con gái chủ động hong ạ? Hicc đây là lần đầu em có ý định cưa người khác luôn á nên hơi bỡ ngỡ, nên có tips nào cưa crush thì mọi người cho em xin với luôn nhaa :< 😂",
    },
    {
      id: "1111122222",
      username: "mies_duynh",
      photo:
        "https://image.thanhnien.vn/w660/Uploaded/2022/juzagt/2020_08_18/anh1_jvzj.jpg",
      type: "array",
      datapost: [
        "https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2022_01_21/anh-1-9607.jpg",
        "https://vnn-imgs-f.vgcloud.vn/2020/06/17/18/phong-cach-thoi-trang-da-dang-cua-blackpink-lisa.jpg",
        "https://dep.com.vn/wp-content/uploads/2022/01/phong-cach-thoi-trang-hoi-huong-vintage-cua-lisa-1.jpg",
      ],
      likecount: 999,
      comments: [
        { username: "obama", comment: "How to make love ?" },
        {
          username: "putin",
          comment: "You can not ",
        },
      ],
      content:
        "Nên cứ vui lên em vì ngày mai lại một cơ hội để ôm trọn thế giới....",
    },
  ];
  return (
    <div className="home-posts">
      <div className="home-story">
        <ListStory />
      </div>
      <div className="home-content">
        <div className="home-content-posts">
          {posts?.map((item, index) => (
            <Post key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
