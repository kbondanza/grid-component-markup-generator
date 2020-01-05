import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import DismissIcon from "./dismiss-icon";
import Box from "./box";

const StyledButton = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    outline: 2px dotted #00909e;
  }
`;

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
  height: 500px;
  z-index: 10;
  background-color: #1b2a49;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  border-radius: 3px;
  padding: 1em 2em;
  @media screen and (min-width: 52em) {
    padding: 1em 4em;
  }
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

  useEffect(() => {
    return () => document.body.removeChild(node);
  });

  return createPortal(children, node);
};

export default function Modal({ children, onRequestClose }) {
  return (
    <Portal>
      <ModalWrapper>
        <ModalCard>
          <Box position="absolute" top="8px" right="8px">
            <StyledButton
              as="button"
              border="0"
              bg="#1b2a49"
              onClick={onRequestClose}
            >
              <DismissIcon title="Dismiss" fill="#00b8c9" />
            </StyledButton>
          </Box>
          {children}
        </ModalCard>
        <Veil />
      </ModalWrapper>
    </Portal>
  );
}
