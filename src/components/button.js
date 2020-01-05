import React from "react";
import Box from "./box";
import styled from "styled-components";

const StyledButton = styled(Box)`
  cursor: pointer;
  outline: 0;
  &:hover,
  &:focus {
    background: #1b2a49;
    color: #00b8c9;
  }
`;

export default function Button({ children, onClick, type, ...rest }) {
  return (
    <StyledButton
      as="button"
      type={type}
      onClick={onClick}
      padding="0.25em 0.5em"
      borderRadius="50px"
      bg="#00909e"
      color="#060b14"
      border="1px solid #00909e"
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
