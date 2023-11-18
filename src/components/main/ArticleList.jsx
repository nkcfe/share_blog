import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

import { useNavigate } from "react-router-dom";
import { throttle } from "throttle-debounce";

const ArticleList = () => {
  const articles = useSelector((state) => state.articleReducer.articles);
  const navigate = useNavigate();

  const onClickNavigateDetail = (articleId) => {
    navigate(`/detail/${articleId}`);
  };

  return (
    <Base>
      {articles.map((article) => (
        <>
          <ArticleCard
            article={article}
            key={article.id}
            onClickNavigateDetail={onClickNavigateDetail}
          />
        </>
      ))}
    </Base>
  );
};

export default ArticleList;

const Base = styled.div`
  margin: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열을 가진 그리드 생성 */
  gap: 40px;
`;
