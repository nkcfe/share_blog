import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";
import Button from "../common/Button";

const Base = styled.div`
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.background};
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 500px;
  min-height: 300px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #7a7471;
  }
`;

const Closebtn = styled.div`
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-left: auto;
  color: #7a7471;
  cursor: pointer;
  &:hover {
    color: red;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Body = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 200px;

  border: 2px dashed #d2c8c3;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    color: #138beb;
  }
  span {
    margin-top: 25px;
    font-size: 20px;
    font-weight: bold;
  }

  cursor: pointer;
  &:hover {
    background-color: #dadbdc;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
  margin-bottom: 20px;
`;

const CoverImgAddModal = ({
  handleToggleModal,
  setCoverImage,
  imageUrl,
  setImageUrl,
}) => {
  const [image, setImage] = useState(null);

  // 이미지 파일을 가져와서 저장하기 위함.
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      const file = acceptedFiles[0];
      if (file) {
        reader.onloadend = () => {
          setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setImage(file);
      }
    },
    [setImageUrl]
  );

  const onClickUploadCoverImage = () => {
    setCoverImage(imageUrl);
    handleToggleModal();
  };

  const onClickdeleteImage = () => {
    setImage(null);
    setImageUrl(null);
  };

  const onClickModalCloseBtn = () => {
    handleToggleModal()
    setImage(null);
    setImageUrl(null);
  }

  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Base>
      <Header>
        <span>업로드</span>
        <Closebtn onClick={onClickModalCloseBtn}>
          <IoMdClose />
        </Closebtn>
      </Header>
      <Body {...getRootProps()}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
          />
        ) : (
          <>
            <IoImagesOutline />
            <input {...getInputProps()} />
            <span>이미지를 드롭하거나 업로드해주세요.</span>
          </>
        )}
      </Body>
      {image && (
        <Footer>
          <FileContainer>
            <IoImageOutline />
            <span>{image.path}</span>
            <Closebtn>
              <IoMdClose onClick={onClickdeleteImage} />
            </Closebtn>
          </FileContainer>
          <Button
            color="primary"
            padding="10px 20px"
            onClick={onClickUploadCoverImage}
          >
            업로드
          </Button>
        </Footer>
      )}
    </Base>
  );
};

export default CoverImgAddModal;
