import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal";
import ConfirmModal from "./ConfirmModal";
import { getCookieUser } from "../../storage/Cookie";
import { __postArticle } from "../../redux/modules/articleReducer";

const PostHeader = ({ titleValue, textValue, coverImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // month는 0부터 시작하기 때문에 +1
  const day = String(today.getDate()).padStart(2, "0"); // padStart()는 문자열에 자릿수 만큼 0 채울수 있음.

  const formattedDate = `${year}.${month}.${day}`;
  const { userId } = getCookieUser();

  const onClickSave = () => {
    const newArticle = {
      id: uuidv4(),
      author: userId,
      title: titleValue,
      date: formattedDate,
      text: textValue,
      heart: 0,
      coverImg: coverImage,
    };
    console.log(newArticle);
    handleModalToggle();
    // dispatch(__postArticle(newArticle));
  };

  return (
    <Base>
      <div>
        <Button
          padding="10px"
          margin="0 5px"
          color="light"
          onClick={() => navigate("/")}
        >
          <BiArrowBack />
          Back
        </Button>
      </div>
      <div>
        <Button margin="0 10px 0 auto" color="primary" onClick={onClickSave}>
          수정하기
        </Button>
        <Modal isOpen={isModalOpen}>
          <ConfirmModal />
        </Modal>
      </div>
    </Base>
  );
};

export default PostHeader;

const Base = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 75px;

  z-index: 99;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 5px 105px;
  background: ${({ theme }) => theme.color.subBg};
  opacity: 0.95;
`;
