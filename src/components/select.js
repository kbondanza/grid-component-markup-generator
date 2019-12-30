import React from "react";
import Box from "./box";
import Label from "./label";
import { getInitialState, types, reducer } from "@matthamlin/property-controls";

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
          <Box as="option" key={option.value} value={option.value}>
            {option.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

Select.propertyControls = {
  value: {
    type: types.string,
    label: ""
  }
};
