import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function RowsInput({ state, dispatch, propertyControls }) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="rows-input"
    />
  );
}

RowsInput.propertyControls = {
  value: {
    type: types.number,
    label: "Rows",
    default: 2,
    description:
      "Each `<Grid>` component represents a row. Two rows selected will result in two `<Grid>` components rendered."
  }
};
