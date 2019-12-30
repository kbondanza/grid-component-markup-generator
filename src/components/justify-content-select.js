import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function JustifyContentSelect({
  state,
  dispatch,
  propertyControls
}) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="justify-content-select"
    />
  );
}

JustifyContentSelect.propertyControls = {
  value: {
    type: types.enum,
    label: "Justify Content",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-around",
      "space-between"
    ],
    default: "flex-start"
  }
};
