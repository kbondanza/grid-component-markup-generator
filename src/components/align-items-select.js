import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function AlignItemsSelect({
  state,
  dispatch,
  propertyControls
}) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="align-items-select"
    />
  );
}

AlignItemsSelect.propertyControls = {
  value: {
    type: types.enum,
    label: "Align Items",
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
