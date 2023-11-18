import React, { useEffect, useState } from "react";
import useInput from "../components/customhook/useInput";
import { useDispatch, useSelector } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";
import styled from "styled-components";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";
import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const articleId = params.articleId;

  const articles = useSelector((state) => state.articleReducer.articles);

  const filteredArticle = articles.filter(
    (article) => article.id === articleId
  )[0];

  const [titleValue, setTitleValue] = useState(filteredArticle.title);
  const [textValue, setTextValue] = useState(filteredArticle.text);
  const [coverImage, setCoverImage] = useState(filteredArticle.coverImg);

  const handleChangeTitleValue = (e) => {
    setTitleValue(e.target.value);
  };
  const handleChangeTextValue = (e) => {
    setTextValue(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getUser(getCookieUser().token));
  }, [dispatch]);
  return (
    <Base>
      <PostHeader
        titleValue={titleValue}
        textValue={textValue}
        coverImage={coverImage}
        type="edit"
      />
      <PostBody
        titleValue={titleValue}
        handleChangeTitleValue={handleChangeTitleValue}
        textValue={textValue}
        handleChangeTextValue={handleChangeTextValue}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
      />
    </Base>
  );
};

export default Edit;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.subBg};
  min-height: 100vh;
`;
