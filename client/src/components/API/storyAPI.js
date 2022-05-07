import { setStory, setLoading } from "../../redux/storySlice";
import axiosClient from "./configAxios";

export const getStory = async (dispatch, id) => {
  dispatch(setLoading());
  try {
    // const response = await axiosClient.post(`/user/login/${id}`);
    // if (response.data) {
    //   dispatch(setStory(response.data));
    dispatch(
      setStory({
        username: "vantusieunhan",
        photo:
          "https://hinhnen123.com/wp-content/uploads/2021/07/anh-mang-dep-nhat-3.jpg",
        storis: [
          {
            type: "image/jpg",
            content:
              "https://file.tinnhac.com/resize/600x-/2019/08/26/20190826103657-4954.jpg",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/ce26fbfb8f562e49861ddaa84b544e0e/627428fb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ba2084ad973548b2861cbb41ee26787b/?a=1988&br=2756&bt=1378&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZfDWjwe2N4hhml7Gb&l=202205051343370102440690741A34517E&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l1OTw6ZnFrPDMzZjgzM0ApZjRpOWU3Ojw5Nzk1MzZnOmdzbW1gcjQwYmhgLS1kL2Nzc2I2Y2I1LzY1YWJgLzQwNWA6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/771d1a31f6f53db7005021689771fc10/62742905/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fa5a9cde55bd4a9497f0c00fc2febe85/?a=1988&br=2858&bt=1429&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZfDWjwe2N4hhml7Gb&l=202205051343370102440690741A34517E&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2U4NGQ6ZnRyPDMzZjgzM0ApZmU8Z2U7N2Q3Nzw1NTpmPGdqXmxncjRvZmNgLS1kL2Nzc140Yl9hYDMuL2BfLWIzLzA6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "image/jpg",
            content:
              "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/04/rose-coachella-696x1044.jpg?fit=700%2C20000&quality=95&ssl=1",
          },
          {
            type: "video/mp4",
            content:
              "https://f7-zvc.zdn.vn/72a6e3e142f2aaacf3e3/9006735269060389837",
          },
        ],
        userView: ["111", "222", "333", "444"],
      })
    );
    // }
    // dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};
