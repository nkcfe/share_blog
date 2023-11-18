import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Template;

const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.color.subBg};
`;
