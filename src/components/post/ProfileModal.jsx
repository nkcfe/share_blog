import React from "react";
import styled from "styled-components";

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

const Title = styled.div``;

const Input = styled.input``;

const ProfileModal = () => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load",()=>{
       
    })
  };
  return (
    <Base>
      <Input
        type="file"
        onChange={handleChange}
        inputProps={{ accept: "image/jpeg, image/jpg, image/png" }}
        label="변경할 프로필 이미지 선택"
      />
    </Base>
  );
};

export default ProfileModal;
