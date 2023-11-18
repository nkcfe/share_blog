import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { push } from "redux-first-history";
import { removeCookieUser, setCookieUser } from "../../storage/Cookie";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getUser = createAsyncThunk(
  "getUser",
  async (payload, thunkApi) => {
    try {
      const headers = {
        authorization: `Bearer ${payload}`,
      };
      await api.get("user", { headers });
      return thunkApi.fulfillWithValue();
    } catch (error) {
      thunkApi.dispatch(push("/login"));
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkApi) => {
    try {
      const response = await api.post("login", payload);
      setTimeout(() => {
        thunkApi.dispatch(push("/"));
      }, 3000);
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
      setTimeout(() => {
        thunkApi.dispatch(push("/login"));
      }, 3000);
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
    clearSuccess: (state, action) => {
      return {
        ...state,
        isSuccess: false,
      };
    },
    logoutUser: () => {
      return {
        isAuthenticated: false,
        isLoading: false,
        isSuccess: false,
        error: null,
      };
    },
  },
  extraReducers: {
    [__getUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.isSuccess = true;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isSuccess = false;
      state.error = action.payload;
      removeCookieUser();
    },
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
      setCookieUser(action.payload.token, action.payload.user.id);
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    [__registerUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [__registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [__registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export const { clearError, logoutUser, clearSuccess } = userSlice.actions;
export default userSlice.reducer;
