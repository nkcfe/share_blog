import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [cookies] = useCookies(["JWTToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키가 사라졌으면 로그인 페이지로 이동
    if (!cookies.JWTToken) {
      alert('유효기간이 만료되었습니다. 다시 로그인해주세요.')
      navigate("/login");
    }
  }, [cookies.JWTToken, navigate]);
  return <div>Detail</div>;
};

export default Detail;
