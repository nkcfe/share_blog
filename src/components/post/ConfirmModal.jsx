import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";

import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.background};
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin-top: 25px;
  font-size: 16px;
`;
const GradientIcon = styled(FaCheck)`
  & path {
    fill: url(#gradient);
  }
  font-size: 50px;
`;

const ConfirmModal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <Base>
      <Title>저장되었습니다!</Title>
      <SubTitle>메인페이지로 이동합니다.</SubTitle>
      <Button margin="30px 0 0 0">
        <svg height="0" width="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "red" }} />
              <stop offset="50%" style={{ stopColor: "orange" }} />
              <stop offset="100%" style={{ stopColor: "yellow" }} />
            </linearGradient>
          </defs>
        </svg>
        <GradientIcon />
      </Button>
    </Base>
  );
};

export default ConfirmModal;
