import React from "react";
import Box from "./box";
import { getInitialState, types, reducer } from "@matthamlin/property-controls";

export default function Select({ value, onChange, options, id }) {
  return (
    <Box as="select" id={id} value={value} onChange={onChange}>
      {options.map(option => (
        <Box as="option" key={option.value} value={option.value}>
          {option.name}
        </Box>
      ))}
    </Box>
  );
}

Select.propertyControls = {
  value: {
    type: types.string,
    label: ""
  }
};
