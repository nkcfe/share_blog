import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookieUser = (token, userId) => {
  // const now = new Date();
  // const expireDate = new Date(now.getTime() + 60 * 60 * 1000);

  const UserAuthInfo = {
    token: token,
    userId: userId,
  };

  return cookies.set("UserAuthInfo", UserAuthInfo, {
    sameSite: "strict", // 쿠키를 다른 도메인에 보내지 않음
    path: "/", // 전체 경로에서 쿠키 사용 가능
    // expires: new Date(expireDate), // 만료시간 설정
  });
};

export const getCookieUser = () => {
  return cookies.get("UserAuthInfo");
};

export const removeCookieUser = () => {
  return cookies.remove("UserAuthInfo", { sameSite: "strict", path: "/" });
};
