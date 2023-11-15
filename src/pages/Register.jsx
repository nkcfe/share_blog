import React, { useEffect } from "react";
import Template from "../components/authentic/Template";
import SignUpForm from "../components/authentic/SignUpForm";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [cookies] = useCookies(["JWTToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키가 사라졌으면 로그인 페이지로 이동
    if (cookies.JWTToken) {
      alert("이미 로그인되어있습니다.");
      navigate("/");
    }
  }, [cookies.JWTToken, navigate]);
  return (
    <Template>
      <SignUpForm />
    </Template>
  );
};

export default Register;
