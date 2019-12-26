import React from "react";
import Box from "./box";

export default function Button({ children, onClick, type }) {
  return (
    <Box as="button" type={type} onClick={onClick}>
      {children}
    </Box>
  );
}
