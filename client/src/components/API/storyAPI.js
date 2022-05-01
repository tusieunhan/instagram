import { setStory, setLoading } from "../../redux/storySlice";
import axiosClient from "./configAxios";

export const getStory = async (dispatch, id) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post(`/user/login/${id}`);
    if (response.data) {
      dispatch(setStory(response.data));
    }
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};
