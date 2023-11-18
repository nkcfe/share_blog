import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_SERVER}/comments`
      );

      return thunkApi.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkApi) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_JSON_SERVER}/comments`,
        payload
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkApi) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_JSON_SERVER}/comments/${payload}`
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __patchComment = createAsyncThunk(
  "patchComment",
  async (payload, thunkApi) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_JSON_SERVER}/comments/${payload.id}`,
        payload.editComment
      );
    } catch (error) {}
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__deleteComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
