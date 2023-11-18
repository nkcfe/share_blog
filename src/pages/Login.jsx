import React, { useEffect } from "react";
import Template from "../components/authentic/Template";
import LoginForm from "../components/authentic/LoginForm";
import { getCookieUser } from "../storage/Cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookieUser = getCookieUser();
    if (cookieUser) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Template>
      <LoginForm />
    </Template>
  );
};

export default Login;
