import React from "react";
import Box from "./box";

export function Column({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
}

export function Grid({ children, ...rest }) {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
}
