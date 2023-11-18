import React, { useEffect } from "react";
import Template from "../components/authentic/Template";
import SignUpForm from "../components/authentic/SignUpForm";
import { useNavigate } from "react-router-dom";
import { getCookieUser } from "../storage/Cookie";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookieUser = getCookieUser();
    if (cookieUser) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Template>
      <SignUpForm />
    </Template>
  );
};

export default Register;
