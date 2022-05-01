import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    data: [
      {
        username: "vantusieunhan",
        photo:
          "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/279557198_546408030351781_8565199650741181464_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=YsEr7KrfEogAX_xd08e&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8SDA95IMctPoAGFLQ1zI18LdxDDKAA9dB-sHf_ZFq13g&oe=62726833",
        userView: ["111", "222", "333", "444"],
      },
    ],
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
      state.data = 0;
    },
  },
});

export const { setStory, setLoading } = storySlice.actions;
export default storySlice.reducer;
