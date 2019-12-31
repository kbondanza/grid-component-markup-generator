import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  z-index: 10;
  background-color: white;
  box-shadow: 2px 2px 10px rbga(0, 0, 0, 0.3);
  max-width: 94vw;
`;

const Veil = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`;

const Portal = ({ children }) => {
  const node = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(node);
  }, []);

  // useEffect(() => {
  //   return () => document.body.removeChild(node);
  // });

  return createPortal(children, node);
};

export default function Modal({ children, onRequestClose, isOpen }) {
  console.error("modal", isOpen);
  return (
    <Portal>
      {isOpen && (
        <ModalWrapper>
          <ModalCard>
            <button onClick={onRequestClose}>Dismiss</button>
            {children}
          </ModalCard>
          <Veil />
        </ModalWrapper>
      )}
    </Portal>
  );
}