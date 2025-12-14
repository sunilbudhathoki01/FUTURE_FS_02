import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   isAuthenticated,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (action, state) => {},
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
