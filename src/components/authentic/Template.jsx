import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fff;
`;

const Template = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Template;
