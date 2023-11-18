import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentTemplate = ({ children }) => {
  const params = useParams();
  const articleId = params.articleId;

  const comments = useSelector((state) => state.commentReducer.comments);

  const filteredComments = comments.filter(
    (comment) => comment.authorId === articleId
  );

  return (
    <Base>
      <Title>{filteredComments.length}개 댓글</Title>
      {children}
    </Base>
  );
};

export default CommentTemplate;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 700px;
  margin: 50px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.font};
`;
