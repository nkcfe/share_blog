import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #d8d4d2;
  height: 100vh;
`;

const Post = () => {
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
      <PostBody />
    </Base>
  );
};

export default Post;
