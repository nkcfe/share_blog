import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://plus.unsplash.com/premium_photo-1698846876582-793dab358640?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://plus.unsplash.com/premium_photo-1696863125896-4f07791bf7b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://plus.unsplash.com/premium_photo-1696863125896-4f07791bf7b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://plus.unsplash.com/premium_photo-1696863125896-4f07791bf7b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    author: "chul",
    date: "2023.11.14",
    comments: [
      {
        id: 1,
        author: "chul",
        text: "좋아요",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 2,
        author: "fe",
        text: "훌륭합니다!",
        liked: 0,
        date: "2023.01.01",
      },
      {
        id: 3,
        author: "nk",
        text: "마음에 안들어요..",
        liked: 0,
        date: "2023.01.01",
      },
    ],
    title: "JWT Token 쿠키에 넣기",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    liked: 0,
    coverImg:
      "https://plus.unsplash.com/premium_photo-1696863125896-4f07791bf7b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
];

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    createArticle: (state, action) => {
      return state.concat(action.payload);
    },
    createComment: (state, action) => {
      const { comment, id } = action.payload;
      return state.map((article) => {
        if (article.id === id) {
          return {
            ...article,
            comments: [...article.comments, comment],
          };
        }
        return article;
      });
    },
  },
  extraReducers: {},
});

export const { createArticle, createComment } = articleSlice.actions;
export default articleSlice.reducer;
