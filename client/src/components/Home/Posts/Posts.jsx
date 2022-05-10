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
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/279958543_1753298098387158_2064476399511601735_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-6&_nc_sid=730e14&_nc_ohc=iR7xuk_mgVUAX_ftPES&_nc_ht=scontent.fhan3-5.fna&oh=00_AT_2wC1r5jEs7LgqPXwsYPYwfQWDX59a9qSy-LK3YBCVRA&oe=627E4D5F",
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
        "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/279574090_160480136452850_2731035247201465561_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=5cd70e&_nc_ohc=DkCC9ygAn_IAX-rIdDx&_nc_ht=scontent.fhan3-4.fna&oh=00_AT9CpiT56wCG0etNit4qBOO_TCffMDZUFuND6tdFP52QiA&oe=627EC2CA",
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/280333118_160480159786181_2913385171776759274_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=5cd70e&_nc_ohc=aHOYs8eaCO4AX8cyynO&_nc_ht=scontent.fhan3-3.fna&oh=00_AT_gwWWU4HHClmnYB2TkC8alEFynIp_-Rcm85Yrv2vv8TQ&oe=627EB84F",
        "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/280185050_160480223119508_4117241302898216205_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=5cd70e&_nc_ohc=b0dnPfXQ27sAX8jhbiY&_nc_ht=scontent.fhan3-4.fna&oh=00_AT_8ScPKA-fDpk-yVHw4eCoff2eTOUIio3aiVgiAHJdZ_Q&oe=627D5F65",
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
        "Nên cứ vui lên em vì ngày mai lại một cơ hội để ôm trọn thế ....",
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
