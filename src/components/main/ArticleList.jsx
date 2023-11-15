import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import Modal from "../Modal";
import DetailModal from "./DetailModal";

const Base = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열을 가진 그리드 생성 */
  gap: 25px;
`;

const CardWrapper = styled.div``;

const ArticleList = () => {
  const articles = useSelector((state) => state.articleReducer);

  const [isModalOpen, setIsModalOpen] = useState({});

  console.log(isModalOpen);

  const handleModalToggle = (articleId) => {
    setIsModalOpen((prevStates) => ({
      ...prevStates,
      [articleId]: !prevStates[articleId],
    }));
  };

  return (
    <Base>
      {articles.map((article) => (
        <>
          <ArticleCard
            article={article}
            key={article.id}
            modalToggle={handleModalToggle}
          />
          <Modal isOpen={isModalOpen[article.id]}>
            <DetailModal article={article} modalToggle={handleModalToggle} />
          </Modal>
        </>
      ))}
    </Base>
  );
};

export default ArticleList;
