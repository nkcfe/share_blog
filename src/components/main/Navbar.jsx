import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/modules/userReducer";
import { removeCookieToken } from "../../storage/Cookie";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { BiLogoBlogger } from "react-icons/bi";

const Base = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const Menu = styled.div`
  display: flex;
  gap: 5px;
`;

const Navbar = () => {
  const navagate = useNavigate();

  const onClickLogout = () => {
    logoutUser();
    removeCookieToken();
    navagate("/login");
    window.location.reload();
  };
  return (
    <Base>
      <NavContainer>
        <Logo>
          <BiLogoBlogger />
        </Logo>
        <Menu>
          <Button outline="secondary" onClick={() => navagate("/post")}>
            <BsPencil />
            글쓰기
          </Button>
          <Dropdown onClickLogout={onClickLogout}>
            <AiOutlineUser />
          </Dropdown>
        </Menu>
      </NavContainer>
    </Base>
  );
};

export default Navbar;
