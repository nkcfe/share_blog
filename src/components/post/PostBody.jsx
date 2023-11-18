import React, { useState } from "react";
import styled, { css } from "styled-components";

import CoverImgAddModal from "./CoverImageAdd";

const PostBody = ({
  titleValue,
  handleChangeTitleValue,
  textValue,
  handleChangeTextValue,
  coverImage,
  setCoverImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    handleChangeTitleValue(e);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Base>
      <Form>
        <Input
          type="title"
          placeholder="제목을 입력하세요."
          value={titleValue}
          onChange={(e) => handleChange(e)}
        />
        <CoverImgAddModal
          coverImage={coverImage}
          setCoverImage={setCoverImage}
          handleToggleModal={handleToggleModal}
        />
        <Textarea
          placeholder="내용을 입력하세요."
          value={textValue}
          onChange={handleChangeTextValue}
        />
      </Form>
    </Base>
  );
};

export default PostBody;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 50px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  text-align: center;
  background: ${({ theme }) => theme.color.subBg};
  color: ${({ theme }) => theme.color.font};
  &::placeholder {
    color: ${({ theme }) => theme.color.font};
  }
  max-width: 700px;

  ${({ type }) =>
    type === "title"
      ? css`
          font-size: 44px;
          font-weight: bold;
        `
      : css`
          font-size: 18px;
        `};
`;

const Textarea = styled.textarea`
  margin-top: 100px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.color.subBg};
  font-size: 18px;

  width: 700px;

  height: 800px;
  resize: none;

  color: ${({ theme }) => theme.color.font};
  &::placeholder {
    color: ${({ theme }) => theme.color.font};
  }
`;
