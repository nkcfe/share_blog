import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostBody from "../components/post/PostBody";
import { useDispatch } from "react-redux";
import { __getUser } from "../redux/modules/userReducer";
import { getCookieUser } from "../storage/Cookie";
import PostHeader from "../components/post/PostHeader";
import useInput from "../components/customhook/useInput";

const Post = () => {
  const [titleValue, handleChangeTitleValue] = useInput();
  const [textValue, handleChangeTextValue] = useInput();
  const [coverImage, setCoverImage] = useState(null);
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

export default Post;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.subBg};
  min-height: 100vh;
`;
