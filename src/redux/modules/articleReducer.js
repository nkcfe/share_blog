import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
        "https://sharethink-eae116f481b4.herokuapp.com/articles"
      );
      console.log(data);

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
        "https://sharethink-eae116f481b4.herokuapp.com/articles",
        payload
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
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
  },
});

export default articleSlice.reducer;
