import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function GutterInput({ state, dispatch, propertyControls }) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="gutter-input"
    />
  );
}

GutterInput.propertyControls = {
  value: {
    type: types.number,
    label: "Gutter size",
    default: 2,
    description:
      "The amount of margin between each column component. Each value is based on 4px increments."
  }
};
