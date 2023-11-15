import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const rootElement = document.getElementById("#modal-root");
  if (!rootElement) {
    return null;
  }
  return createPortal(children, rootElement);
};

export default Portal;
