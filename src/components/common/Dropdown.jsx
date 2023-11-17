import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css";
import Button from "./Button";

const Ul = styled.ul`
  position: absolute;
  top: 60px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 110px;
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
  width: 100px;
  height: 35px;

  border-radius: 5px;

  font-size: 16px;
  cursor: pointer;

  background: ${({ selected }) => (selected ? "#E6F4FF" : null)};

  &:hover {
    background: #e6f4ff;
  }
`;

const Dropdown = ({ children, onClickLogout, handleToggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button outline="secondary" onClick={handleOpenSelect}>
        {children}
        <AiOutlineDown />
      </Button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <Ul>
          <Li onClick={handleToggleModal}>프로필 설정</Li>
          <Li onClick={() => onClickLogout()}>로그아웃</Li>
        </Ul>
      </CSSTransition>
    </>
  );
};

export default Dropdown;
