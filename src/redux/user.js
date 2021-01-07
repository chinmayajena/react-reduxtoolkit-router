import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export default slice.reducer;
// Actions
const { loginSuccess, logoutSuccess } = slice.actions;
export const login = ({ username, password }) => async (dispatch) => {
  try {
    //const res = await api.post("/api/auth/login/", { username, password });
    dispatch(loginSuccess({ username }));
  } catch (e) {
    return console.error(e.message);
  }
};
export const logout = () => async (dispatch) => {
  try {
    //const res = await api.post("/api/auth/logout/");
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
