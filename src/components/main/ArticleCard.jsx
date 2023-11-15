import React from "react";
import styled from "styled-components";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";

const CoverImg = styled.div`
  width: 200px;
  background-image: url(${({ coverImg }) => coverImg});
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  transition: all 0.3s ease-in-out;
`;

const Base = styled.div`
  width: 300px;
  height: 320px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${CoverImg} {
      background-size: 105%;
    }
    box-shadow: 0 9px 9px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
`;

const Header = styled.div`
  margin-top: 5px;
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const InfoBox = styled.div`
  font-size: 14px;
  color: #aab0be;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 15px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #494f68;
`;

const Text = styled.div`
  width: 280px;
  font-size: 14px;
  color: #6b728a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AuthorWrapper = styled.div`
  margin-left: auto;
  padding: 15px;
`;

const AuthorProfile = styled.div``;

const AuthorName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const ArticleCard = ({ article, modalToggle }) => {
  const { author, date, comments, title, text, liked, coverImg } = article;
  console.log(comments.length);

  return (
    <Base onClick={() => modalToggle(article.id)}>
      <CoverImg coverImg={coverImg} />
      <Header>
        <InfoBox>
          <IoMdTime />
          {date}
        </InfoBox>
        <InfoWrapper>
          <InfoBox>
            <AiOutlineLike />
            {liked}
          </InfoBox>
          <InfoBox>
            <FaRegCommentDots />
            {comments.length}
          </InfoBox>
        </InfoWrapper>
      </Header>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrapper>
      <AuthorWrapper>
        <AuthorProfile></AuthorProfile>
        <AuthorName>by. {author}</AuthorName>
      </AuthorWrapper>
    </Base>
  );
};

export default ArticleCard;
