import React from "react";
import CommentItem from "./CommentItem";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CommentList = () => {
  const params = useParams();
  const articleId = params.articleId;

  const comments = useSelector((state) => state.commentReducer.comments);

  const filteredComments = comments.filter(
    (comment) => comment.authorId === articleId
  );

  return (
    <Base>
      {filteredComments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </Base>
  );
};

export default CommentList;

const Base = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
