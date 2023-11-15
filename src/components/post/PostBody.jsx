import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import PostEditable from "./PostEditable";
import PostHeader from "./PostHeader";
import useInput from "../customhook/useInput";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 50%;
  height: 80%;
  margin-top: 50px;
  border-radius: 15px;

  background: #f6f6f6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: #f6f6f6;
  margin-bottom: 20px;
  ${({ type }) =>
    type === "title"
      ? css`
          font-size: 24px;
          font-weight: bold;
        `
      : css`
          font-size: 18px;
        `}
`;

const PostBody = () => {
  const [titleValue, setTitleValue, handleChangeTitleValue] = useInput();
  const [content, setContent] = useState("");
  const contentEditableRef = useRef(null);

  const handleChange = () => {
    const updatedContent = contentEditableRef.current.innerHTML;
    setContent(updatedContent);
  };
  return (
    <Base>
      <PostHeader titleValue={titleValue} textValue={content} />
      <Form>
        <Input
          type="title"
          placeholder="제목을 입력하세요."
          value={titleValue}
          onChange={handleChangeTitleValue}
        />
        <PostEditable
          contentEditableRef={contentEditableRef}
          content={content}
          handleChange={handleChange}
        />
      </Form>
    </Base>
  );
};

export default PostBody;
