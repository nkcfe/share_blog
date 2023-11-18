import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";
import styled from "styled-components";
import DetailNavbar from "../components/detail/DetailNavbar";
import DetailBody from "../components/detail/DetailBody";
import DetailFooter from "../components/detail/DetailFooter";
import CommentTemplate from "../components/comment/CommentTemplate";
import CommentInput from "../components/comment/CommentInput";
import CommentList from "../components/comment/CommentList";
import { __getComments } from "../redux/modules/commentReducer";
import { __getArticles } from "../redux/modules/articleReducer";

const Detail = () => {
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
      <DetailNavbar />
      <DetailBody />
      <HorizonLine />
      <DetailFooter />
      <HorizonLine />
      <CommentTemplate>
        <CommentInput />
        <CommentList />
      </CommentTemplate>
    </Base>
  );
};

export default Detail;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.subBg};
  min-height: 100vh;
`;

const HorizonLine = styled.div`
  margin: 50px 0;
  width: 700px;
  height: 1px;
  background: ${({ theme }) => theme.color.border};
`;
