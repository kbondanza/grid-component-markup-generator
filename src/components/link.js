import React from "react";
import Box from "./box";
import styled from "styled-components";

const StyledLink = styled(Box)`
  text-decoration: none;
  &:hover,
  &:focus {
    outline: 2px dotted #00909e;
    outline-offset: 4px;
  }
`;

export default function Link({ children, onClick, type }) {
  return (
    <StyledLink as="a" type={type} onClick={onClick}>
      {children}
    </StyledLink>
  );
}
