import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __loginUser } from "../../redux/modules/userReducer";
import styled from "styled-components";
import Button from "../common/Button";
import FormInput from "./FormInput";
import { checkRegex } from "../../common/checkRegex";
import AlertMessage from "./AlertMessage";
import { Link, useNavigate } from "react-router-dom";
import { setCookieToken } from "../../storage/Cookie";

const initialErrorData = {
  id: "",
  password: "",
};

const initialFormData = {
  id: "",
  password: "",
};

const Form = () => {
  const [errorData, setErrorData] = useState(initialErrorData);
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 다시한번 유효성 검사 실시 후 제출
    Object.keys(errorData).forEach((key) =>
      setErrorData((prev) => ({
        ...prev,

        [key]: checkRegex(formData, key),
      }))
    );
    const isValid = Object.values(errorData).every((value) => value === true);
    isValid &&
      dispatch(
        __loginUser({ id: formData["id"], password: formData["password"] })
      );
  };

  useEffect(() => {
    if (users.authenticated) {
      setCookieToken(users.accessToken);
      navigate("/");
    }
  }, [users.authenticated, navigate, users.accessToken]);

  return (
    <Base>
      {users.error && <AlertMessage errorMsg={users.error} />}
      <Title>환영합니다</Title>
      <SubTitle>회원 정보를 입력해주세요.</SubTitle>
      <FormContainer>
        <FormInput
          type="text"
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
          setErrorData={setErrorData}
          inputId="id"
          placeholder={"아이디"}
        />
        <FormInput
          type="password"
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
          setErrorData={setErrorData}
          inputId="password"
          placeholder={"비밀번호"}
        />
        <Button
          margin="25px 0"
          width="100%"
          height="50px"
          onClick={handleSubmit}
          color="primary"
          fontSize="16px"
        >
          로그인
        </Button>
        <LinktoSignup>
          회원이 아니신가요?{" "}
          <Link to="/register">
            <span>회원가입 하기</span>
          </Link>
        </LinktoSignup>
      </FormContainer>
    </Base>
  );
};

export default Form;

const Base = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFontColor};
  margin-top: 15px;
`;

const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinktoSignup = styled.div`
  margin-top: 15px;
  font-size: 14px;
  span {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.point};
  }
`;
