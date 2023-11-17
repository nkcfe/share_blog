import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import PostEditable from "./PostEditable";
import PostHeader from "./PostHeader";
import useInput from "../customhook/useInput";
import { FaRegImage } from "react-icons/fa";
import Modal from "../Modal";
import CoverImgAddModal from "./CoverImgAddModal";
import { IoMdClose } from "react-icons/io";
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

const Textarea = styled.textarea`
  outline: none;
  border: none;
  background: #f6f6f6;
  font-size: 16px;
  width: 100%;
  height: 500px;
  /* resize: none; */
`;

const CoverImgContainer = styled.div`
  margin: 0 0 20px 0;
  padding: 7px;

  width: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  color: #757575;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 9px 9px rgba(0, 0, 0, 0.2);
  }
`;

const CoverContainer = styled.div`
  position: relative;
  max-width: 150px;
`;

const CoverImg = styled.img`
  border-radius: 20px;
  max-width: 150px;
  margin-bottom: 20px;
`;

const Closebtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px;
  font-size: 20px;
  border-radius: 100%;
  background: #fff;
  color: red;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

const PostBody = () => {
  const [titleValue, handleChangeTitleValue] = useInput();
  const [textValue, handleChangeTextValue] = useInput();

  const [coverImage, setCoverImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Base>
      <PostHeader
        titleValue={titleValue}
        textValue={textValue}
        coverImage={coverImage}
      />
      <Form>
        {coverImage ? (
          <CoverContainer>
            <CoverImg src={imageUrl} alt="" />
            <Closebtn onClick={() => setCoverImage(null)}>
              <IoMdClose />
            </Closebtn>
          </CoverContainer>
        ) : (
          <CoverImgContainer onClick={handleToggleModal}>
            <FaRegImage />
            <span>커버 이미지 추가</span>
          </CoverImgContainer>
        )}

        <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
          <CoverImgAddModal
            setCoverImage={setCoverImage}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            handleToggleModal={handleToggleModal}
          />
        </Modal>
        <Input
          type="title"
          placeholder="제목을 입력하세요."
          value={titleValue}
          onChange={handleChangeTitleValue}
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
