import React from "react";
import Box from "./box";
import Label from "./label";

export default function NumberInput({
  dispatch,
  type,
  label,
  id,
  value,
  name
}) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Box
        as="input"
        type={type}
        value={value}
        onChange={({ target: { value } }) => dispatch({ name, value })}
        id={id}
        name={name}
      />
    </Box>
  );
}
