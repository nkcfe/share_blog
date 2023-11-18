import React, { useState } from "react";

import { IoEllipsisVertical } from "react-icons/io5";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Button from "../common/Button";

const DetailDropDown = ({ onClickDelete, onClickPatch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Base>
      <Button padding="4px 0 4px 4px" color="dark" onClick={handleOpenSelect}>
        <IoEllipsisVertical />
      </Button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <Ul>
          <Li onClick={onClickPatch}>수정</Li>
          <Li onClick={onClickDelete}>삭제</Li>
        </Ul>
      </CSSTransition>
    </Base>
  );
};

export default DetailDropDown;

const Base = styled.div`
  position: relative;
`;

const Ul = styled.ul`
  position: absolute;
  top: 30px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 60px;
  background: #fff;

  border-radius: 8px;
  border: 1px solid #f6f6f6;
  padding: 5px;
  margin: 0 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03),
    0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.03);
`;

const Li = styled.li`
  padding: 10px;

  display: flex;
  justify-content: start;
  align-items: center;
  width: 50px;
  height: 35px;

  border-radius: 5px;

  font-size: 16px;
  cursor: pointer;

  background: ${({ selected }) => (selected ? "#E6F4FF" : null)};

  &:hover {
    background: #e6f4ff;
  }
`;
