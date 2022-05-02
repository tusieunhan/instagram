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
              "https://v16-webapp.tiktok.com/64e0a45a51d2bed088451f523a128c1d/626ffb95/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dd5288582539421389f77981a13621b9/?a=1988&br=4580&bt=2290&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZJNrRwe2NTEUml7Gb&l=202205020940580102452422491E1716AC&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2hrZDQ6ZjQ8OjMzZjgzM0ApaDdmNjgzOTs3Nzk6NzlpN2cvcnFfcjRvamVgLS1kL2Nzc2NhXjUuMy5eNDNjMzE1YmA6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "image/jpg",
            content:
              "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/279624693_1438961896541645_7642044141259285640_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=gLu1YNjHzesAX9wywFQ&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8UIw-eOweZ_3d96r9HJ5JtwxtgrLvY7TlNUU1-y_MiqA&oe=62727E8D",
          },
          {
            type: "image/jpg",
            content:
              "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/279418729_713922573288883_6889123929308577279_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=yl4eXqAhzsYAX-bs5pq&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-b32CffUJZtEPRTKPET4rjU-DVY2fRMNp8DFIrXTCM1w&oe=6273A06A",
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
