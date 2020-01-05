import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function CustomElementInput({
  state,
  dispatch,
  propertyControls
}) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="custom-element-input"
    />
  );
}

CustomElementInput.propertyControls = {
  value: {
    type: types.string,
    label: "Custom Element",
    default: "div"
  }
};
