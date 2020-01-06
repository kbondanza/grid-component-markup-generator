import React from "react";
import Box from "./box";
import Info from "./info-icon";
import styled from "styled-components";

const Container = styled(Box)`
  &:hover,
  &:focus {
    outline: 2px dotted #00909e;
    outline-offset: 4px;
    > div {
      left: -4px;
    }
  }
`;

export default function Tooltip({ children }) {
  return (
    <Container position="relative">
      <Info title="More information" fill="#00b8c9" />
      <Box
        bg="#d1e2ff"
        color="#012e6f"
        borderRadius="5px"
        position="absolute"
        p="4"
        left="-10000px"
        top="32px"
        zIndex="1"
        width="300px"
      >
        {children}
      </Box>
    </Container>
  );
}
