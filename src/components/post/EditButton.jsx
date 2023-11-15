import React from "react";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: #7a7471;
  }
  &:hover {
    box-shadow: 0 9px 9px rgba(0, 0, 0, 0.2);
  }
`;

const EditButton = (props) => {
  return (
    <Button
      dropdown={props.dropdown}
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </Button>
  );
};

export default EditButton;
