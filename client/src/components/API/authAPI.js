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
      console.log(response.data);
      dispatch(setCode(response.data.code));
    }
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};

export const verifyCode = async (navigate, dispatch, code) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post("/user/verifyuser", code);
    if (response.data) {
      // dispatch(backLogin(response.data));
      console.log(response.data);
      dispatch(setUser(response.data.code));
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    }
    dispatch(setNotiRegister("Can not verify account"));
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (navigate, dispatch, user) => {
  dispatch(setLoading());
  try {
    const response = await axiosClient.post("/user/login", user);
    if (response.data) {
      dispatch(setUser(response.data.user));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    }
    dispatch(setLoading());
  } catch (error) {
    console.error(error);
  }
};
