import React from "react";
import Box from "./box";
import Label from "./label";
import styled from "styled-components";
import Tooltip from "./tooltip";

const StyledSelect = styled(Box)`
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px #00909e;
  }
  &:focus {
    outline: 0;
  }
`;
export default function Select({
  label,
  value,
  dispatch,
  name,
  options,
  id,
  description
}) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridGap="8px"
      justifyItems="space-between"
    >
      <Label htmlFor={id}>{label}</Label>
      <Tooltip>{description}</Tooltip>
      <StyledSelect
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
      </StyledSelect>
    </Box>
  );
}
