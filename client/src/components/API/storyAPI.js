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
              "https://v16-webapp.tiktok.com/ebfcca257f749017280f5740775e9d7d/62710ccb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b9af9f1042c1461e9e256531c69c89eb/?a=1988&br=2992&bt=1496&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZXtRjwe2NU1Wml7Gb&l=202205030506400102452450020FA16628&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dubjg6ZmZvPDMzZjgzM0ApNWk5OTlpOWRlNzxkNTNkNWdsYXFmcjRvaGtgLS1kL2NzczUzXmMyNWMuYzBhNC5hMjM6Yw%3D%3D&vl=&vr=",
          },
          {
            type: "video/mp4",
            content:
              "https://v16-webapp.tiktok.com/8ae460c4a9dd59d6d8e3fe46fdb2aa22/62710db2/video/tos/useast2a/tos-useast2a-pve-0037-aiso/93b349d9fb9c4e6fb52f57657ea16b91/?a=1988&br=2250&bt=1125&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZbORjwe2NpPWml7Gb&l=20220503051018010245004114279B3BB1&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJkbmk6ZnM6PDMzZjgzM0ApNmY4OWRmOTs5N2Y3ZTo8ZmcwXzFscjRvYzJgLS1kL2Nzcy8wMjMwXi4tNTIwYDUuLS06Yw%3D%3D&vl=&vr=",
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
