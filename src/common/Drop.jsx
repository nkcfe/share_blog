import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";

const Base = styled.div`
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;
  width: 300px;
  z-index: 99;
`;

const MenuItem = styled.li``;

const Drop = () => {
  const [selectedItem, setSelectedItem] = useState("1번");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [{ label: "1번" }, { label: "2번" }];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (label) => {
    setSelectedItem(label);
    setIsOpen(false);
  };

  // 외부 영역 클릭 시 닫힘
  useEffect(() => {}, []);

  return (
    <Base>
      <Button onClick={toggleOpen}>{selectedItem}</Button>
      {isOpen && (
        <Menu>
          {menuItems.map(({ label }) => (
            <MenuItem
              key={label}
              onClick={() => {
                selectItem(label);
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Base>
  );
};

export default Drop;
