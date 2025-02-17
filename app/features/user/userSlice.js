import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userInfo));
    },
    updateLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateUser, updateLoggedIn } = userSlice.actions;
