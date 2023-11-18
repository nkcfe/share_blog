import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailBody = () => {
  const articles = useSelector((state) => state.articleReducer.articles);
  const params = useParams();
  const articleId = params.articleId;
  const article = articles.filter((article) => article.id === articleId);
  const { date, title, text, coverImg } = article[0];

  return (
    <Base>
      <Date>게시날짜 ・ {date}</Date>
      <Title>{title}</Title>
      <CoverImage coverImage={coverImg} />
      <Text>{text}</Text>
    </Base>
  );
};

export default DetailBody;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFont};
`;

const Title = styled.div`
  margin: 50px 20%;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.font};
`;

const CoverImage = styled.div`
  margin: 30px 30%;
  background-image: url(${({ coverImage }) => coverImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 700px;
  height: 300px;
`;

const Text = styled.div`
  width: 700px;
  font-size: 20px;
  line-height: 38px;
  color: ${({ theme }) => theme.color.font};
`;
