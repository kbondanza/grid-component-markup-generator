import React from "react";
import Box from "./box";

export default function Label({ children, htmlFor }) {
  return (
    <Box as="label" htmlFor={htmlFor}>
      {children}
    </Box>
  );
}
