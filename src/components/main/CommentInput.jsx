import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import useInput from "../customhook/useInput";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../redux/modules/articleReducer";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "../../functions/common";

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
  const [inputValue, setInputValue, onChangeInputValutHandler] = useInput();

  const users = useSelector((state) => state.userReducer);
  console.log(users.user.id);
  const dispatch = useDispatch();

  const onClickSubmit = () => {
    const newComment = {
      id: uuidv4(),
      author: users.user.id,
      text: inputValue,
      liked: 0,
      date: getToday(),
    };
    dispatch(createComment({ comment: newComment, id: id }));
    setInputValue("");
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
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
