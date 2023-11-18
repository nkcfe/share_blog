import React from "react";
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const ArticleCard = ({ article, onClickNavigateDetail }) => {
  const { id, author, date, title, text, heart, coverImg } = article;

  const comments = useSelector((state) => state.commentReducer.comments);

  const commentLength = comments.filter(
    (comment) => comment.authorId === id
  ).length;

  return (
    <Base onClick={() => onClickNavigateDetail(id)}>
      <CoverImg coverImg={coverImg} />
      <DateBox>{date}</DateBox>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextWrapper>
      <Footer>
        <FooterContents>
          <FaRegHeart style={{ color: "red" }} />
          {heart} heart
        </FooterContents>
        <FooterContents>
          <FaRegCommentDots />
          {commentLength} comments
        </FooterContents>
        <FooterContents>by. {author}</FooterContents>
      </Footer>
    </Base>
  );
};

export default ArticleCard;

const CoverImg = styled.div`
  background-image: url(${({ coverImg }) => coverImg});
  background-size: 100%;
  background-position: center;

  width: 100%;
  height: 170px;
  min-height: 170px;

  border-radius: 15px 15px 0 0;

  transition: all 0.3s ease-in-out;
`;

const Base = styled.div`
  position: relative;

  width: 300px;
  height: 370px;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: ${({ theme }) => theme.color.subBg};

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  &:hover {
    ${CoverImg} {
      background-size: 115%;
    }
    box-shadow: 0 9px 9px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 15px;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  width: 100%;
  height: 46px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFont};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit the text to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  margin-top: 5px;
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`;

const DateBox = styled.div`
  position: absolute;
  top: 142px;
  left: 0;

  padding: 5px;

  background: #ee5c35;

  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const FooterContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  color: #a2a7aa;
  gap: 5px;
  font-size: 11px;
  span {
    margin-top: 3px;
  }
`;
