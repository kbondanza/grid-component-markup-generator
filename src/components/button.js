import React from "react";
import Box from "./box";
import styled from "styled-components";

const StyledButton = styled(Box)`
  cursor: pointer;
  outline: 0;
`;

export default function Button({ children, onClick, type }) {
  return (
    <StyledButton
      as="button"
      type={type}
      onClick={onClick}
      padding="0.25em 0.5em"
      borderRadius="50px"
    >
      {children}
    </StyledButton>
  );
}
