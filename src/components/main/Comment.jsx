import React from "react";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";

const Base = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 10px;
`;

const Line = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid gray;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;
`;

const InfoAuthor = styled.div`
  color: #7b8189;
  font-size: 14px;
  font-weight: bold;
`;

const InfoDate = styled.div`
  color: #7b8189;
  font-size: 14px;
  font-weight: bold;
`;

const TextContainer = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #1f2a30;
`;

const Liked = styled.div`
  margin-left: auto;
`;

const Comment = ({ comment }) => {
  const { author, text, liked, date } = comment;
  return (
    <Base>
      <Line>
        <Profile>
          <FaRegUser />
        </Profile>
        <BodyContainer>
          <InfoContainer>
            <InfoAuthor>{author}</InfoAuthor>
            <InfoDate>{date}</InfoDate>
          </InfoContainer>
          <TextContainer>{text}</TextContainer>
        </BodyContainer>
        <Liked>{liked}</Liked>
      </Line>
    </Base>
  );
};

export default Comment;
