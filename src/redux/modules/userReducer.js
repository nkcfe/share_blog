import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";

export const TOKEN_TIME_OUT = 60 * 60 * 1000;

const initialState = {
  user: [],
  authenticated: false,
  accessToken: null,
  expireTime: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkApi) => {
    try {
      const response = await api.post("login", payload);

      return thunkApi.fulfillWithValue({
        user: payload,
        token: response.data.token,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const __registerUser = createAsyncThunk(
  "registerUser",
  async (payload, thunkApi) => {
    try {
      const response = await api.post("register", payload);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state, action) => {
      return {
        ...state,
        error: null,
      };
    },
    logoutUser: (state, action) => {
      return {
        user: [],
        authenticated: false,
        accessToken: null,
        expireTime: null,
        isLoading: false,
        error: null,
      };
    },
  },
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.authenticated = true;
      state.accessToken = action.payload.token;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__registerUser.fulfilled]: (state, action) => {
      state.isSuccess = true;
    },
    [__registerUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { clearError, logoutUser } = userSlice.actions;
export default userSlice.reducer;
