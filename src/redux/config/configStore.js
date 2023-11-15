import articleReducer from "../modules/articleReducer";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/userReducer";
import authReducer from "../modules/authReducer";

const store = configureStore({
  reducer: {
    authToken: authReducer,
    userReducer: userReducer,
    articleReducer: articleReducer,
  },
});

export default store;
