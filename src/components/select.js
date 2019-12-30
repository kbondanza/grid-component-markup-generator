import React from "react";
import Box from "./box";
import Label from "./label";

export default function Select({ label, value, dispatch, name, options, id }) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Box
        as="select"
        id={id}
        value={value}
        onChange={({ target: { value } }) => dispatch({ name, value })}
      >
        {options.map(option => (
          <Box as="option" key={option} value={option}>
            {option}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
