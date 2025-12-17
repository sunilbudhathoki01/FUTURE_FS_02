import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};
// for registration
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (FormData) => {
    const response = await axios.post(
      "http://localhost:4000/api/auth/register",
      FormData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);
// for login
export const loginUser = createAsyncThunk("/auth/login", async (FormData) => {
  const response = await axios.post(
    "http://localhost:4000/api/auth/login",
    FormData,
    {
      withCredentials: true,
    }
  );
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // for registration
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      // for login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
