import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InfoItem = styled.div``;

const DetailFooter = () => {
  const articles = useSelector((state) => state.articleReducer.articles);
  const params = useParams();
  const articleId = params.articleId;
  const article = articles.filter((article) => article.id === articleId);
  const { author, date, heart } = article[0];
  return (
    <Base>
      <Title>게시글 정보</Title>
      <InfoContainer>
        <InfoItem>작성자: {author}</InfoItem>
        <InfoItem>작성날짜 : {date}</InfoItem>
        <InfoItem>좋아요 : {heart}개</InfoItem>
      </InfoContainer>
    </Base>
  );
};

export default DetailFooter;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
`;

const InfoContainer = styled.div`
  font-weight: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFont};
`;
