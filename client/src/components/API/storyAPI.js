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
              "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/279888821_144317854792040_313493866433414617_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=5cd70e&_nc_ohc=uglbrzn-rjMAX-RGGSB&tn=ihAGq0D3n_nTK1tj&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_8DQTzAUgNfHqorVnVURI8IA1Mfk9u7RsYaUy8DmS-XQ&oe=627E9FF5",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/f64fed3ac4dbe9bebe9fa7a2ffe2efc1/6279448c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c5c270d1df764528aa4629fcfcab894c/?a=1988&br=4576&bt=2288&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZovgCwe2N8RBml7Gb&l=20220509104221010244082046043A47B8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Q5Mzs6Zjd2PDMzZjgzM0ApMzRpaTY7NWQ3NzM1NjYzNWdicnIvcjQwc2VgLS1kL2Nzc2M0YmFiNi9jMC02YzRhYF86Yw%3D%3D&vl=&vr=",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/1c7cf792951476a70fb65333c8485d74/62794480/video/tos/useast2a/tos-useast2a-pve-0037-aiso/4a5500f61f8d4dc680b7164bc7213a49/?a=1988&br=2958&bt=1479&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZovgCwe2N8RBml7Gb&l=20220509104221010244082046043A47B8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2aDs6ZnhqPDMzZjgzM0ApOTY3ZGQ5Zjs6N2k6NmY2PGdvZ3NqcjRnLmxgLS1kL2Nzc2JjYDEyYzMxXjMuLWA0LTU6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "image/jpg",
            content:
              "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/04/rose-coachella-696x1044.jpg?fit=700%2C20000&quality=95&ssl=1",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/8f1c14e0065c7ba3c173f62cd81f16ac/627945a2/video/tos/useast2a/tos-useast2a-pve-0037-aiso/26645056ee7349e1b73adab533a06f11/?a=1988&br=1710&bt=855&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZXsgCwe2N8RBml7Gb&l=20220509104656010245043153013B2171&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k6ZDY6Zmd3PDMzZjgzM0ApN2lkNjYzNztpNzY2Z2lnNmdoZDI0cjRvNTRgLS1kL2NzczA2MzEyMTQ0LzE1XmM2LzE6Yw%3D%3D&vl=&vr=",
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
