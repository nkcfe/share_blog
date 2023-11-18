import React, { useState } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  __getComments,
  __postComment,
} from "../../redux/modules/commentReducer";
import { v4 as uuidv4 } from "uuid";
import { getCookieUser } from "../../storage/Cookie";
import { getToday } from "../../functions/common";
import { useParams } from "react-router-dom";

const CommentInput = () => {
  const [inputValue, setInputValue] = useState("");

  const params = useParams();
  const articleId = params.articleId;

  const dispatch = useDispatch();
  const userId = getCookieUser().userId;

  const onClickCommentSave = async () => {
    const newComment = {
      authorId: articleId,
      id: uuidv4(),
      author: userId,
      text: inputValue,
      date: getToday(),
    };
    await dispatch(__postComment(newComment));
    setInputValue("");
    dispatch(__getComments());
  };

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Base>
      <Input
        placeholder="댓글을 작성해보세요."
        onChange={onChangeInputValue}
        value={inputValue}
      />
      <BtnWrapper onClick={onClickCommentSave}>
        <IoMdSend />
      </BtnWrapper>
    </Base>
  );
};

export default CommentInput;

const Base = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.color.font};
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  caret-color: ${({ theme }) => theme.color.font};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 17px;
  &::placeholder {
    color: ${({ theme }) => theme.color.font};
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  right: 10px;
  border-radius: 5px;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.color.font};
    font-size: 20px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.subFont};
  }
`;
