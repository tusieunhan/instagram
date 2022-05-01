import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    data: {
      username: "vantusieunhan",
      photo:
        "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279557198_546408030351781_8565199650741181464_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=YsEr7KrfEogAX_xd08e&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8SDA95IMctPoAGFLQ1zI18LdxDDKAA9dB-sHf_ZFq13g&oe=62726833",
      storis: [
        "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279557198_546408030351781_8565199650741181464_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=YsEr7KrfEogAX_xd08e&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8SDA95IMctPoAGFLQ1zI18LdxDDKAA9dB-sHf_ZFq13g&oe=62726833",
        "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279585254_1438961799874988_4109017197392088408_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=m4BTyibqTGoAX_M14Gq&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-e2uy8bvn-QYuk-xydJXzHscfXbz2J5Uf0KyUx-dNHQw&oe=62728C6B",
        "https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/279624693_1438961896541645_7642044141259285640_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=gLu1YNjHzesAX9wywFQ&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8UIw-eOweZ_3d96r9HJ5JtwxtgrLvY7TlNUU1-y_MiqA&oe=62727E8D",
        "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/279418729_713922573288883_6889123929308577279_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=yl4eXqAhzsYAX-bs5pq&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-b32CffUJZtEPRTKPET4rjU-DVY2fRMNp8DFIrXTCM1w&oe=6273A06A",
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
