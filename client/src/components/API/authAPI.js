import { setUser } from "../../redux/userSlice";
import axiosClient from "./configAxios";

export const registerUser = async (dispatch, user) => {
    try {
        const response = await axiosClient.post("/user/register", user);
        console.log(response)
        dispatch(setUser(response.data.user));
    } catch (error) {
        console.error(error);
    }
};