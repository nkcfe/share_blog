import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";
import { compressImage } from "../../common/compressImage";

const CoverImgAddModal = ({ coverImage, setCoverImage }) => {
  const [image, setImage] = useState(null);

  // 이미지 파일을 가져와서 저장하기 위함.
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      const file = acceptedFiles[0];
      if (file) {
        reader.onloadend = async () => {
          const compressedImage = await compressImage(reader.result);

          setCoverImage(compressedImage);
        };
        reader.readAsDataURL(file);
        setImage(file);
      }
    },
    [setCoverImage]
  );

  const onClickdeleteImage = () => {
    setImage(null);
    setCoverImage(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Base>
      <Body {...getRootProps()}>
        {coverImage ? (
          <img
            src={coverImage}
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
        </Footer>
      )}
    </Base>
  );
};

export default CoverImgAddModal;

const Base = styled.div`
  margin-top: 60px;

  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.subBg};

  width: 700px;
  height: 300px;
`;

const Closebtn = styled.div`
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-left: auto;
  color: ${({ theme }) => theme.color.subFont};
  cursor: pointer;
  &:hover {
    color: red;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Body = styled.div`
  width: 700px;
  height: 300px;

  border: 2px dashed ${({ theme }) => theme.color.border};
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
    color: ${({ theme }) => theme.color.font};
  }

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.bg};
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
  svg {
    color: ${({ theme }) => theme.color.font};
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.font};
  }
  margin-bottom: 20px;
`;
