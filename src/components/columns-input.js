import React from "react";
import PropertyControls from "./property-controls";
import { types } from "@matthamlin/property-controls";

export default function ColumnsInput({ state, dispatch, propertyControls }) {
  return (
    <PropertyControls
      state={state}
      dispatch={dispatch}
      propertyControls={propertyControls}
      id="columns-input"
    />
  );
}

ColumnsInput.propertyControls = {
  value: {
    type: types.number,
    label: "Columns",
    default: 2,
    description: "The number of `<Column>` components rendered in each row."
  }
};
