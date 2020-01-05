import React from "react";
import Box from "./box";
import Label from "./label";
import styled from "styled-components";

const StyledInput = styled(Box)`
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px #00909e;
  }
  &:focus {
    outline: 0;
  }
`;

export default function Input({ dispatch, type, label, id, value, name }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridGap="8px"
      justifyItems="space-between"
    >
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        as="input"
        type={type}
        value={value}
        onChange={({ target: { value } }) => dispatch({ name, value })}
        id={id}
        name={name}
        width="50px"
      />
    </Box>
  );
}
