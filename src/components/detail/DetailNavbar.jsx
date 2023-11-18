import React from "react";
import styled from "styled-components";
import { getCookieUser } from "../../storage/Cookie";
import Button from "../common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { __deleteArticle } from "../../redux/modules/articleReducer";
import DetailDropDown from "./DetailDropDown";

const DetailNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  // params에서 article id가져오기
  const articleId = params.articleId;

  // Redux에서 관리되는 전체 articles 가져와서 상세페이지 id와 같은것 가져오기
  const articles = useSelector((state) => state.articleReducer.articles);
  const filteredArticle = articles.filter(
    (article) => article.id === articleId
  );
  // 필터링된 article에서 작성자 정보 가져오기
  const article_author = filteredArticle[0].author;

  // 쿠키에서 로그인된 아이디 가져오기
  const { userId } = getCookieUser();

  // payload로 article id 넘겨 삭제 요청
  const onClickDelete = () => {
    dispatch(__deleteArticle(articleId));
  };

  const onClickPatch = () => {
    navigate(`/edit/${articleId}`);
  };

  return (
    <Base>
      <Button
        padding="10px"
        margin="0 5px"
        color="dark"
        onClick={() => navigate("/")}
      >
        <BiArrowBack />
        Back
      </Button>
      <Menu>
        {article_author === userId && (
          <DetailDropDown
            onClickDelete={onClickDelete}
            onClickPatch={onClickPatch}
          />
        )}
      </Menu>
    </Base>
  );
};

export default DetailNavbar;

const Base = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 75px;

  z-index: 99;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 5px 105px;
  background: ${({ theme }) => theme.color.subBg};
  opacity: 0.95;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  gap: 5px;
`;
