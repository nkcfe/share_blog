import React, { useEffect } from "react";
import Navbar from "../components/main/Navbar";

import styled from "styled-components";
import ArticleList from "../components/main/ArticleList";
import { useDispatch } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";
import { __getArticles } from "../redux/modules/articleReducer";
import { __getComments } from "../redux/modules/commentReducer";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6f8;
`;

const Home = () => {
  // 쿠키에서 토큰을 가져와 서버에 토큰 인증 시작
  // 오류일 경우 reducer에서 로그인페이지로 강제 이동 및 쿠키 삭제
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getUser(getCookieUser().token));
    dispatch(__getArticles());
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <Base>
      <Navbar />
      <ArticleList />
    </Base>
  );
};

export default Home;
