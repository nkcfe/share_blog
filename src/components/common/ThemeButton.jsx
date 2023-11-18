import React from "react";
import styled from "styled-components";

const ThemeButton = ({ handleModeChange, isLightMode }) => {
  console.log(isLightMode);
  return (
    <Base isLightMode={isLightMode} onClick={handleModeChange}>
      <Circle isLightMode={isLightMode} />
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  width: 50px;
  height: 30px;

  border: 1px solid #ecedee;
  border-radius: 50px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ isLightMode }) =>
    isLightMode === "LightMode" ? "#198cff" : "#40494C"};
`;

const Circle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  left: ${({ isLightMode }) => (isLightMode === "LightMode" ? "7px" : "25px")};
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #fff;
  transition: all 0.3s ease;
`;

export default ThemeButton;
