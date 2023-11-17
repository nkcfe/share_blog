import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import useInput from "../customhook/useInput";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "../../functions/common";
import { getCookieUser } from "../../storage/Cookie";
import {
  __getComments,
  __postComment,
} from "../../redux/modules/commentReducer";

const Base = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  background: #f6f7f9;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: 1px solid #f3f4f6;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 35px;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: #a4a8ab;
  }
`;

const CommentInput = ({ article, bottomRef }) => {
  const { id } = article;
  const [inputValue, setInputValue] = useState();

  const onChangeInputValutHandler = (e) => {
    setInputValue(e.target.value);
  };

  const { userId } = getCookieUser();

  const dispatch = useDispatch();

  const onClickSubmit = async () => {
    const newComment = {
      articleId: id,
      id: uuidv4(),
      author: userId,
      text: inputValue,
      liked: 0,
      date: getToday(),
    };

    // Dispatch post comment action and wait for it to complete
    await dispatch(__postComment(newComment));

    // Clear input after successful comment post
    setInputValue("");

    // Dispatch get comments action
    dispatch(__getComments());

    // Scroll to the bottom
    
  };

  
  return (
    <Base>
      <Input value={inputValue} onChange={onChangeInputValutHandler} />
      <SubmitBtn onClick={onClickSubmit}>
        <AiOutlineSend />
      </SubmitBtn>
    </Base>
  );
};

export default CommentInput;
