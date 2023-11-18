import React from "react";
import styled from "styled-components";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
  LuBold,
  LuUnderline,
  LuType,
} from "react-icons/lu";
import { BsCode } from "react-icons/bs";
import ContentEditable from "react-contenteditable";
import EditButton from "./EditButton";

const PostEditable = ({ contentEditableRef, content, handleChange }) => {
  const isPlaceholderVisible = content.trim().length === 0;

  return (
    <Base>
      <Editbar>
        <EditButton cmd="bold" name={<LuBold />} />
        <EditButton cmd="underline" name={<LuUnderline />} />
        <EditButton cmd="italic" name={<LuItalic />} />
        <EditButton cmd="formatBlock" arg="h1" name={<LuHeading1 />} />
        <EditButton cmd="formatBlock" arg="h2" name={<LuHeading2 />} />
        <EditButton cmd="formatBlock" arg="h3" name={<LuHeading3 />} />
        <EditButton cmd="formatBlock" arg="p" name={<LuType />} />
        <EditButton
          cmd="insertHTML"
          arg="<pre><code></code></pre>"
          name={<BsCode />}
        />
      </Editbar>
      <ContentsContainer>
        {isPlaceholderVisible && (
          <Placeholder>내용을 입력해보세요!</Placeholder>
        )}
        <EditableContainer
          innerRef={contentEditableRef}
          html={content}
          onChange={handleChange}
        />
      </ContentsContainer>
    </Base>
  );
};

export default PostEditable;

const Base = styled.div`
  border-top: 2px solid #edeceb;
  padding: 10px 0;
`;

const ContentsContainer = styled.div`
  position: relative;
`;

const EditableContainer = styled(ContentEditable)`
  outline: none;
  font-size: 16px;
  line-height: 1.6;
  padding: 10px;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #aaa;
  pointer-events: none;
  user-select: none;
  font-size: 16px;
`;

const Editbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  height: 40px;

  gap: 10px;
`;
