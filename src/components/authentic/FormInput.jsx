import React, { useState } from "react";
import styled, { css } from "styled-components";
import { checkRegex } from "../../common/checkRegex";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

// 3.커스텀 에러 메세지
const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

const FormInput = ({
  formData,
  setFormData,
  setErrorData,
  inputId,
  placeholder,
  errorData,
  type,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPwShow, setIsPwShow] = useState("password");

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [inputId]: e.target.value }));
  };

  const onBlurHandler = () => {
    setIsFocused(false);
    setErrorData((prev) => ({
      ...prev,
      [inputId]: checkRegex(formData, inputId),
    }));
  };

  const onClickpwShowHandler = () => {
    isPwShow === "password" ? setIsPwShow("text") : setIsPwShow("password");
  };

  return (
    <Base>
      <Input
        type={type === "password" || type === "passwordCheck" ? isPwShow : type}
        value={formData[inputId]}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlurHandler}
        onChange={(e) => onChangeHandler(e)}
      />
      <PlaceHolder focus={isFocused} value={formData[inputId]}>
        {placeholder}
      </PlaceHolder>
      <ErrorMsg>
        {errorData[inputId] !== true ? ERROR_MSG[errorData[inputId]] : ""}
      </ErrorMsg>
      {(type === "password" || type === "passwordCheck") && (
        <>
          {isPwShow === "password" ? (
            <BsEyeSlashFill onClick={onClickpwShowHandler} />
          ) : (
            <IoEyeSharp onClick={onClickpwShowHandler} />
          )}
        </>
      )}
    </Base>
  );
};

export default FormInput;

const Base = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    top: 41px;
    right: 15px;
    color: ${({ theme }) => theme.color.font};
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.font};
    }
  }
`;

const Input = styled.input`
  margin-top: 25px;
  width: 100%;
  height: 50px;
  outline: none;
  background: ${({ theme }) => theme.color.subBg};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.font};
  border-radius: 5px;
  padding: 15px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.point};
  }
`;

const PlaceHolder = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.color.font};
  background-color: ${({ theme }) => theme.color.subBg};
  border-radius: 50px;
  padding: 5px;
  ${({ focus }) =>
    focus
      ? css`
          font-size: 13px;
          font-weight: bold;
          color: ${({ theme }) => theme.color.point};
          top: 13px;
          left: 13px;
        `
      : css`
          font-size: 16px;
          top: 30px;
          left: 15px;
        `}
  ${({ value }) =>
    value &&
    css`
      font-size: 12px;
      color: ${({ theme }) => theme.color.point};
      top: 13px;
      left: 13px;
    `}
`;

const ErrorMsg = styled.div`
  margin-top: 1px;
  margin-left: 15px;
  font-size: 12.5px;
  font-weight: bold;
  color: red;
  height: 5px;
`;
