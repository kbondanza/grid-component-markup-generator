import React, { useState, useCallback } from "react";
import Box from "./box";
import { getInitialState, types, reducer } from "@matthamlin/property-controls";

export default function TextInput({ onChange, type, label, id, value, name }) {
  // let [value, setValue] = useState(defaultValue);
  // let handleChange = useCallback(
  //   function handleChange(value) {
  //     setValue(value);
  //     onChange(value);
  //   },
  //   [onChange]
  // );
  return (
    <Box
      as="input"
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      id={id}
      name={name}
    />
  );
}

TextInput.propertyControls = {
  value: types.string,
  label: "The value passed to the component"
};
