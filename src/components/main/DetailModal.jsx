import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.background};

  width: 100%;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #ebedef;
  padding: 10px;
`;

const ArticleBody = styled.div`
  padding: 30px 30px 0px 30px;
  max-height: 450px;
  overflow: scroll;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 25px;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Line = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

const LineTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #575e67;
`;

const LineContents = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #575e67;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Contents = styled.div`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
`;

const CommentBody = styled.div`
  background: #f6f7f9;
  border-top: 1px solid #ebedef;
  padding: 10px 0;
  max-height: 250px;
  overflow: scroll;
`;

const DetailModal = ({ article, modalToggle }) => {
  const { id, author, date, comments, title, text, liked, coverImg } = article;
  const bottomRef = useRef(null);
  return (
    <Base>
      <Navbar>
        <Button outline="primary" padding="5px">
          <AiOutlineLike />
          좋아요
        </Button>
        <Button outline="danger" margin="0 0 0 5px" padding="5px">
          <MdDeleteOutline />
          삭제
        </Button>
        <Button margin="0 0 0 auto" onClick={() => modalToggle(id)}>
          <IoClose />
        </Button>
      </Navbar>
      <ArticleBody>
        <Header>
          <HeaderTitle>게시글 정보</HeaderTitle>
          <Line>
            <LineTitle>작성자</LineTitle>
            <LineContents>{author}</LineContents>
          </Line>
          <Line>
            <LineTitle>날&nbsp;&nbsp;&nbsp;&nbsp;짜</LineTitle>
            <LineContents>
              <CiCalendar />
              {date}
            </LineContents>
          </Line>
        </Header>
        <Header>
          <HeaderTitle>제목</HeaderTitle>
          <Contents>{title}</Contents>
        </Header>
        <Header>
          <HeaderTitle>내용</HeaderTitle>
          <Contents>{text}</Contents>
        </Header>
      </ArticleBody>
      <CommentBody>
        {comments.map((comment) => (
          <Comment key={comment.key} comment={comment} />
        ))}
        <div ref={bottomRef}></div>
      </CommentBody>
      <CommentInput article={article} bottomRef={bottomRef} />
    </Base>
  );
};

export default DetailModal;
