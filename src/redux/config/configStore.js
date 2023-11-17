import articleReducer from "../modules/articleReducer";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/userReducer";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import commentReducer from "../modules/commentReducer";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    articleReducer: articleReducer,
    commentReducer: commentReducer,
    router: routerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);
