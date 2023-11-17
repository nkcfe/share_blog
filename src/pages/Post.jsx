import React, { useEffect } from "react";
import styled from "styled-components";
import PostBody from "../components/post/PostBody";
import { useDispatch } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #d8d4d2;
  height: 100vh;
`;

const Post = () => {
  // 쿠키에서 토큰을 가져와 서버에 토큰 인증 시작
  // 오류일 경우 reducer에서 로그인페이지로 강제 이동 및 쿠키 삭제
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getUser(getCookieUser().token));
  }, [dispatch]);
  return (
    <Base>
      <PostBody />
    </Base>
  );
};

export default Post;
