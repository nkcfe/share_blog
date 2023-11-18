import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";

import { getCookieUser } from "../../storage/Cookie";
import { useDispatch } from "react-redux";
import {
  __deleteComment,
  __getComments,
  __patchComment,
} from "../../redux/modules/commentReducer";
import EditDropdown from "./EditDropdown";

const CommentItem = ({ comment }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { authorId, id, author, date, text } = comment;
  const [textValue, setTextValue] = useState(text);

  const dispatch = useDispatch();

  const curUser = getCookieUser().userId;

  const onChangeTextValue = (e) => {
    setTextValue(e.target.value);
  };

  const saveComment = () => {
    const editComment = {
      authorId,
      id,
      author,
      text: textValue,
      date,
    };
    dispatch(__patchComment({ id: id, editComment: editComment }));
    toggleEditMode();
  };

  const deleteComment = async () => {
    await dispatch(__deleteComment(id));
    dispatch(__getComments());
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <Base>
      <InfoContainer>
        {isEditMode ? null : (
          <>
            <UserName>{author}</UserName>
            <Date>{date}</Date>
            <RightWrapper>
              {curUser === author && (
                <EditDropdown
                  deleteComment={deleteComment}
                  toggleEditMode={toggleEditMode}
                />
              )}
            </RightWrapper>
          </>
        )}
      </InfoContainer>
      <Text
        value={textValue}
        disabled={!isEditMode}
        isEditMode={isEditMode}
        onChange={onChangeTextValue}
      />
      {isEditMode && (
        <ButtonContainer>
          <Button onClick={toggleEditMode}>취소</Button>
          <Button outline="primary" onClick={saveComment}>
            저장
          </Button>
        </ButtonContainer>
      )}
    </Base>
  );
};

export default CommentItem;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.bg};
  padding: 15px;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;

const UserName = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
`;

const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFont};
`;

const Text = styled.input`
  margin-top: 10px;
  font-size: 18px;
  background: ${({ theme }) => theme.color.bg};
  outline: none;
  border: none;
  border-bottom: ${({ isEditMode, theme }) =>
    isEditMode && `1px solid ${theme.color.border}`};
  color: ${({ theme }) => theme.color.font};
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  margin-left: auto;
`;
