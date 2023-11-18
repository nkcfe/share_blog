import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { clearError, clearSuccess } from "../../redux/modules/userReducer";
import { IoWarning } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AlertMessage = ({ Msg, type }) => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // progress bar 구현
    // 3초 카운트
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1000 / 3000; //  10 milliseconds 3%씩 증가

        if (newProgress >= 110) {
          clearInterval(intervalId);
          setProgress(100);
          dispatch(clearError());
        }

        return newProgress;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
      if (type === "success") {
        dispatch(clearSuccess());
      } else {
        dispatch(clearError());
      }
    };
  }, [dispatch, navigate, type]);

  return (
    <Base type={type}>
      <AlertContainer>
        <AlertIcon type={type}>
          {type === "success" ? <FaCheckCircle /> : <IoWarning />}
        </AlertIcon>
        {type === "success" ? (
          <>
            <AlertErrorMsg>{Msg}</AlertErrorMsg>
            <CloseBtn onClick={() => dispatch(clearSuccess())}>
              <IoIosClose />
            </CloseBtn>
          </>
        ) : (
          <>
            <AlertErrorMsg>{Msg}</AlertErrorMsg>
            <CloseBtn onClick={() => dispatch(clearError())}>
              <IoIosClose />
            </CloseBtn>
          </>
        )}
      </AlertContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} type={type} />
      </ProgressBarContainer>
    </Base>
  );
};

export default AlertMessage;

const Base = styled.div`
  position: absolute;
  top: -100px;
  display: flex;
  flex-direction: column;
  background: ${({ type }) => (type === "success" ? "#EBF7EE" : "#fbeeea")};

  max-width: 350px;
  min-height: 50px;

  border: 1px solid
    ${({ type }) => (type === "success" ? "#BEE5C8" : "#f5c5bb")};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const AlertContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 10px;
`;

const AlertIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({ type }) => (type === "success" ? "#3FBF62" : "#fa3a2f")};
  border-radius: 15px;

  color: #fff;
  svg {
    font-size: 30px;
  }
`;

const AlertErrorMsg = styled.div`
  font-size: 16px;
  padding: 0 25px;
  max-width: 250px;
  /* font-weight: bold; */
  color: #333c48;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
`;

const ProgressBarContainer = styled.div`
  height: 5px;
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 5px;
  border-radius: 5px;
  background: ${({ type }) => (type === "success" ? "#BEE5C8" : "#f5c5bb")};
  transition: width 0.3s ease;
`;
