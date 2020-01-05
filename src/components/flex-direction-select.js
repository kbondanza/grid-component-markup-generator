import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function FlexDirectionSelect({
  state,
  dispatch,
  propertyControls
}) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="flex-direction-select"
    />
  );
}

FlexDirectionSelect.propertyControls = {
  value: {
    type: types.enum,
    label: "Flex Direction",
    options: ["column", "row"],
    default: "row",
    description:
      "Defines the direction flex items are placed, establishing the main axis. `row` is the default value."
  }
};
