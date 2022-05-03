import {
  setCode,
  setLoading,
  setNotiRegister,
  setUser,
} from "../../redux/userSlice";
import axiosClient from "./configAxios";

export const registerUser = async (dispatch, user) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post("/user/register", user);
    if (response.data) {
      dispatch(setCode(response.data));
    }
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};


export const verifyCode = async (dispatch, code) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post("/user/verifyuser", code);
    if (response.data) {
      // dispatch(backLogin(response.data));
      alert(response.data);
    }
    dispatch(setNotiRegister("Can not verify account"));
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post("/user/login", user);
    if (response.data) {
      dispatch(setUser(response.data.user))
      localStorage("user", response.data.user)
    }
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};