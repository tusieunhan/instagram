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
          "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/279089493_500561495082166_3161730557857291237_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RmJzTA79kI4AX9n1JsE&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT_QNYlVrlLaFajThy8SZX_FHnjP3RObRXx_CYIkyJrpsg&oe=6272B7D3",
        storis: [
          {
            type: "image/jpg",
            content:
              "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279585254_1438961799874988_4109017197392088408_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=m4BTyibqTGoAX_M14Gq&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-e2uy8bvn-QYuk-xydJXzHscfXbz2J5Uf0KyUx-dNHQw&oe=62728C6B",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/5ff09003b8eaedc21b68f0c9c18f118a/62727aaf/video/tos/useast2a/tos-useast2a-pve-0037-aiso/4a5500f61f8d4dc680b7164bc7213a49/?a=1988&br=2958&bt=1479&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZT1Qjwe2NKpgml7Gb&l=202205040707400102510091540E5039F4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2aDs6ZnhqPDMzZjgzM0ApOTY3ZGQ5Zjs6N2k6NmY2PGdvZ3NqcjRnLmxgLS1kL2Nzc2JjYDEyYzMxXjMuLWA0LTU6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/ba97eac5326ca1ea5edcd0c43b9b3684/62727aaf/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ba2084ad973548b2861cbb41ee26787b/?a=1988&br=2756&bt=1378&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZT1Qjwe2NKpgml7Gb&l=202205040707400102510091540E5039F4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l1OTw6ZnFrPDMzZjgzM0ApZjRpOWU3Ojw5Nzk1MzZnOmdzbW1gcjQwYmhgLS1kL2Nzc2I2Y2I1LzY1YWJgLzQwNWA6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "image/jpg",
            content:
              "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/279624693_1438961896541645_7642044141259285640_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=gLu1YNjHzesAX9wywFQ&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8UIw-eOweZ_3d96r9HJ5JtwxtgrLvY7TlNUU1-y_MiqA&oe=62727E8D",
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
