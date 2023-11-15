import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../redux/modules/articleReducer";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal";
import ConfirmModal from "./ConfirmModal";

const Base = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
  background: #fff;

  border-radius: 15px 15px 0 0;
  span {
    margin-left: 15px;
    font-weight: bold;
    font-size: 16px;
    color: #ada69f;
  }
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px 0 0 0;

  font-size: 18px;
  color: #ada69f;

  width: 50px;
  height: 100%;

  cursor: pointer;
  &:hover {
    color: #fff;
    background: #a8a19a;
  }
`;

const PostHeader = ({ titleValue, textValue }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer);

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // month는 0부터 시작하기 때문에 +1
  const day = String(today.getDate()).padStart(2, "0"); // padStart()는 문자열에 자릿수 만큼 0 채울수 있음.

  const formattedDate = `${year}.${month}.${day}`;

  const onClickSave = () => {
    dispatch(
      createArticle({
        id: uuidv4(),
        author: users.user.id,
        date: formattedDate,
        comments: [],
        title: titleValue,
        text: textValue,
        liked: 0,
        coverImg: "",
      })
    );
    handleModalToggle();
  };

  return (
    <Base>
      <BackBtn onClick={() => navigate("/")}>
        <BiArrowBack />
      </BackBtn>
      <span>New post</span>
      <Button margin="0 10px 0 auto" outline="success" onClick={onClickSave}>
        저장하기
      </Button>
      <Modal isOpen={isModalOpen}>
        <ConfirmModal />
      </Modal>
    </Base>
  );
};

export default PostHeader;
