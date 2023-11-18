import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { clearSuccess, logoutUser } from "../../redux/modules/userReducer";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import Modal from "../Modal";
import ProfileModal from "../post/ProfileModal";
import { getCookieUser, removeCookieUser } from "../../storage/Cookie";
import ThemeButton from "../common/ThemeButton";
import { useDispatch } from "react-redux";

const Navbar = ({ setThemeMode, themeMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 글쓰기 모달 관리

  const userId = getCookieUser()?.userId; // ? -> 쿠키가 없을 경우 방어
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 모달 토글
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 로그아웃
  const onClickLogout = () => {
    dispatch(logoutUser());
    removeCookieUser();
    navigate("/login");
  };

  const ToggleThemeMode = () => {
    setThemeMode((prev) => (prev === "LightMode" ? "DarkMode" : "LightMode"));
  };

  return (
    <Base>
      <Logo>
        <span>Hello! {userId}</span>
      </Logo>
      <Menu>
        <ThemeButton
          isLightMode={themeMode}
          handleModeChange={ToggleThemeMode}
        />
        <Button color="dark" padding="6px;" onClick={() => navigate("/post")}>
          글쓰기
        </Button>
        <Dropdown
          onClickLogout={onClickLogout}
          handleToggleModal={handleToggleModal}
        >
          <AiOutlineUser />
        </Dropdown>
        <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
          <ProfileModal handleToggleModal={handleToggleModal} />
        </Modal>
      </Menu>
    </Base>
  );
};

export default Navbar;

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

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
  span {
    font-size: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
