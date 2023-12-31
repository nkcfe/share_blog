import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal";
import ConfirmModal from "./ConfirmModal";
import { getCookieUser } from "../../storage/Cookie";
import {
  __patchArticle,
  __postArticle,
} from "../../redux/modules/articleReducer";
import { getToday } from "../../functions/common";

const PostHeader = ({ titleValue, textValue, coverImage, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userId } = getCookieUser();

  const onClickSave = () => {
    const newArticle = {
      id: uuidv4(),
      author: userId,
      title: titleValue,
      date: getToday(),
      text: textValue,
      heart: 0,
      coverImg: coverImage,
    };
    handleModalToggle();
    if (type === "edit") {
      dispatch(
        __patchArticle({ id: params.articleId, editArticle: newArticle })
      );
    } else {
      dispatch(__postArticle(newArticle));
    }
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
          저장하기
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
