import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    data: {
      username: "vantusieunhan",
      photo:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/279089493_500561495082166_3161730557857291237_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RmJzTA79kI4AX9n1JsE&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT_QNYlVrlLaFajThy8SZX_FHnjP3RObRXx_CYIkyJrpsg&oe=6272B7D3",
      storis: [

        {
          type: "image/jpg",
          content: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279585254_1438961799874988_4109017197392088408_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=m4BTyibqTGoAX_M14Gq&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-e2uy8bvn-QYuk-xydJXzHscfXbz2J5Uf0KyUx-dNHQw&oe=62728C6B"
        },
        {
          type: "video/mp4",
          content: "https://v16-webapp.tiktok.com/11935f57b10d82e757d6b40e38a52a64/626ed6bc/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c75db214deaf4a26898b9118f3363972/?a=1988&br=3538&bt=1769&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZdukRwe2NLuQml7Gb&l=202205011251160102440552270B8A80E3&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21zdWg6Zmw5PDMzZjgzM0ApNWRmNjQ6Z2U8N2RpMzNpM2c1a3NwcjRvcDJgLS1kL2Nzcy4yNGIxYl8vYzNfLWBjNC06Yw%3D%3D&vl=&vr="
        },
        {
          type: "image/jpg",
          content: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/279624693_1438961896541645_7642044141259285640_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=gLu1YNjHzesAX9wywFQ&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8UIw-eOweZ_3d96r9HJ5JtwxtgrLvY7TlNUU1-y_MiqA&oe=62727E8D"
        },
        {
          type: "image/jpg",
          content: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/279418729_713922573288883_6889123929308577279_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=yl4eXqAhzsYAX-bs5pq&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-b32CffUJZtEPRTKPET4rjU-DVY2fRMNp8DFIrXTCM1w&oe=6273A06A"
        },
      ],
      userView: ["111", "222", "333", "444"],
    },

    // data: [],
    loading: false,
  },
  reducers: {
    setStory: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    unStory: (state) => {
      state.data = null;
    },
  },
});

export const { setStory, setLoading, unStory } = storySlice.actions;
export default storySlice.reducer;
