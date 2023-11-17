import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";

const Detail = () => {
  // 쿠키에서 토큰을 가져와 서버에 토큰 인증 시작
  // 오류일 경우 reducer에서 로그인페이지로 강제 이동 및 쿠키 삭제
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getUser(getCookieUser().token));
  }, [dispatch]);
  return <div>Detail</div>;
};

export default Detail;
