import React from "react";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/modules/userReducer";

const AlertContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  top: -100px;
  background: #fad8d5;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const AlertIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: #fa3a2f;
  border-radius: 100%;
  font-size: 20px;
  color: #fff;
`;

const AlertErrorMsg = styled.div`
  font-size: 14px;

  font-weight: bold;
  color: #4b5054;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
`;

const AlertMessage = ({ errorMsg }) => {
  const dispatch = useDispatch();
  return (
    <AlertContainer>
      <AlertIcon>
        <CiCircleAlert />
      </AlertIcon>
      <AlertErrorMsg>{errorMsg}</AlertErrorMsg>
      <CloseBtn onClick={() => dispatch(clearError())}>
        <IoIosClose />
      </CloseBtn>
    </AlertContainer>
  );
};

export default AlertMessage;
