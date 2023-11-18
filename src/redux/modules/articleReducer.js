import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { push } from "redux-first-history";

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const __getArticles = createAsyncThunk(
  "getArticles",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_JSON_SERVER}/articles`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);

export const __postArticle = createAsyncThunk(
  "postArticle",
  async (payload, thunkApi) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_JSON_SERVER}/articles`,
        payload
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __deleteArticle = createAsyncThunk(
  "deleteArticle",
  async (payload, thunkApi) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_JSON_SERVER}/articles/${payload}`
      );
      thunkApi.dispatch(push("/"));
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const __patchArticle = createAsyncThunk(
  "patchArticle",
  async (payload, thunkApi) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_JSON_SERVER}articles/${payload.id}`,
        payload.editArticle
      );
    } catch (error) {}
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: {
    [__getArticles.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [__getArticles.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__postArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__postArticle.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__postArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteArticle.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__deleteArticle.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default articleSlice.reducer;
