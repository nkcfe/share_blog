import React from "react";
import styled, { css } from "styled-components";

const CustomButton = styled.div`
  ${({ color }) =>
    color === "light"
      ? css`
          background: #fff;
          border: 1px solid #d9d9d9;
          &: hover {
            background: #e1e1e1;
          }
        `
      : color === "dark"
      ? css`
          background: #212529;
          color: #fff;
          &: hover {
            background: #3b4146;
          }
        `
      : color === "primary"
      ? css`
          background: #0d6efd;
          color: #fff;
          &: hover {
            background: #0d61df;
          }
        `
      : color === "success"
      ? css`
          background: #1a8754;
          color: #fff;
          &: hover {
            background: #146a42;
          }
        `
      : color === "danger"
      ? css`
          background: #dc3545;
          color: #fff;
          &: hover {
            background: #be2e3c;
          }
        `
      : color === "purple"
      ? css`
          background: #8873ef;
          color: #fff;
          &: hover {
            background: #7765d3;
          }
        `
      : null}

  ${({ outline }) =>
    outline === "default"
      ? css`
          background: #fff;
          border: 1.5px solid #d9d9d9;
          color:#d9d9d9
          &: hover {
            background: #d9d9d9;
            color: #fff;
          }
        `
      : outline === "secondary"
      ? css`
          background: #fff;
          border: 1.5px solid #6c757d;
          color: #6c757d;
          &: hover {
            background: #6c757d;
            color: #fff;
          }
        `
      : outline === "primary"
      ? css`
          background: #fff;
          border: 1.5px solid #0d6dfc;
          color: #0d6dfc;
          &: hover {
            background: #0d6dfc;
            color: #fff;
          }
        `
      : outline === "success"
      ? css`
          background: #fff;
          border: 1px solid #1a8754;
          color: #1a8754;
          &: hover {
            background: #1a8754;
            color: #fff;
          }
        `
      : outline === "danger"
      ? css`
          background: #fff;
          border: 1px solid #dc3545;
          color: #dc3545;
          &: hover {
            background: #dc3545;
            color: #fff;
          }
        `
      : css`
          border: none;
        `}
    
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? padding : "8px")};
  position: relative;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
`;

const Button = ({
  children,
  color = "light",
  outline = "light",
  fontSize,
  width,
  height,
  onClick,
  margin,
  padding,
}) => {
  return (
    <CustomButton
      color={color}
      outline={outline}
      onClick={onClick}
      fontSize={fontSize}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
