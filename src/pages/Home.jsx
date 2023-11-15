import React, { useEffect } from "react";
import Navbar from "../components/main/Navbar";
import { getCookieToken } from "../storage/Cookie";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import ArticleList from "../components/main/ArticleList";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6f8;
`;

const Home = () => {
  const [cookies] = useCookies(["JWTToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키가 사라졌으면 로그인 페이지로 이동
    if (!cookies.JWTToken) {
      alert("유효기간이 만료되었습니다. 다시 로그인해주세요.");
      navigate("/login");
    }
  }, [cookies.JWTToken, navigate]);
  return (
    <Base>
      <Navbar />
      <ArticleList />
    </Base>
  );
};

export default Home;
