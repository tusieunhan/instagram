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
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/279179878_1456112181485967_2460896349116617535_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9kONkkduUCAAX-qVYJS&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT9Cg64t99IjU4X5EaH3N3LIdAlmMESbQ8vllTzhNaEHNQ&oe=62715C8D",
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
        "https://v16-webapp.tiktok.com/11935f57b10d82e757d6b40e38a52a64/626ed6bc/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c75db214deaf4a26898b9118f3363972/?a=1988&br=3538&bt=1769&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZdukRwe2NLuQml7Gb&l=202205011251160102440552270B8A80E3&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21zdWg6Zmw5PDMzZjgzM0ApNWRmNjQ6Z2U8N2RpMzNpM2c1a3NwcjRvcDJgLS1kL2Nzcy4yNGIxYl8vYzNfLWBjNC06Yw%3D%3D&vl=&vr=",
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
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/245787435_1171943956668822_4106746346127118337_n.jpg?stp=dst-jpg_s526x395&_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NZjsnZcFMAYAX_Vcnce&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT-Q4m_EyM7ESY-S2tC-Qd9RTRw11VjyezY4gf_TZIWB4Q&oe=6272F535",
      type: "array",
      datapost: [
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/274580783_714182253076945_7882144008773545103_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=XjlWRcdHimwAX8sFpnQ&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT8DNuulela20DvJFXQKVqx58HHjHHyBPY23Vfuz8dlUfw&oe=62722926",
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/255967615_649994349495736_2707982143404693298_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=18vtOGE4FkMAX8lCFDj&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT8XYltdMaMhnB3W1U3jZz7oAEhWpThcUNu_5AGKANbezw&oe=6272FAD3",
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/255445498_649994252829079_7981782898317341957_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=pyInYIGnieoAX9ozpXl&tn=kscTwOMICBHtsLEL&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT_8k2kGi_jkBjhDUJZbM9z8vBfBYPNOjJi_tdbfbV0L1Q&oe=6271D11A",
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
