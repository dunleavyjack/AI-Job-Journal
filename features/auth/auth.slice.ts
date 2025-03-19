import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types/auth.types";

const initialState: AuthState = {
  username: "",
};

export const counterSliuce = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  selectors: {
    isUserLoggedIn: (state) => state.username,
  },
});
