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

export default function Link({ children, href, type }) {
  return (
    <StyledLink
      as="a"
      type={type}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="#00b8c9"
    >
      {children}
    </StyledLink>
  );
}
