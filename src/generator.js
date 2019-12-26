// 1. create components
//   a. grid component
//   b. checkbox
// 2. hook up the property controls package with the following components
// 3. create a node script that writes to a file the grid markup, can console.log it initially
import React, { useState, useCallback, useReducer } from "react";
import { Grid, Column } from "./components/grid";
import Button from "./components/button";
import Select from "./components/select";
import Label from "./components/label";
import TextInput from "./components/text-input";
import { getInitialState, types, reducer } from "@matthamlin/property-controls";

export default function Generator() {
  const [rows, setRows] = useState(12);
  const [columns, setColumns] = useState(12);
  const [gutterSize, setGutterSize] = useState(4);
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");

  function handleChangeRows(event) {
    const { value } = event.target;
    setRows(value);
  }

  function handleChangeColumns(event) {
    const { value } = event.target;
    setColumns(value);
  }

  function handleChangeGutterSize(event) {
    const { value } = event.target;
    setGutterSize(value);
  }

  function handleChangeFlexDirection(event) {
    const { value } = event.target;
    setFlexDirection(value);
  }

  function handleChangeJustifyContent(event) {
    const { value } = event.target;
    setJustifyContent(value);
  }

  function handleChangeAlignItems(event) {
    const { value } = event.target;
    setAlignItems(value);
  }

  console.error(
    alignItems,
    "align items",
    justifyContent,
    "justify content",
    flexDirection,
    "flex dir",
    gutterSize,
    "gutter size",
    rows,
    "rows",
    columns,
    "columns"
  );

  return (
    <div>
      {[...Array(rows)].map((x, i) => (
        <Grid border="1px solid red" key={i}>
          {[...Array(columns)].map((x, i) => (
            <Column
              border="1px solid blue"
              width="20px"
              height="20px"
              key={i}
            ></Column>
          ))}
        </Grid>
      ))}
      <form>
        <Label htmlFor="rows-input">Rows</Label>
        <TextInput
          id="rows-input"
          type="number"
          name="rows"
          value={rows}
          onChange={handleChangeRows}
        />
        <Label htmlFor="columns-input">Columns</Label>
        <TextInput
          id="columns-input"
          type="number"
          name="columns"
          value={columns}
          onChange={handleChangeColumns}
        />
        <Label htmlFor="gutter-input">Gutter size</Label>
        <TextInput
          id="gutter-input"
          type="number"
          name="gutter-size"
          value={gutterSize}
          onChange={handleChangeGutterSize}
        />
        <Label htmlFor="flex-direction-select">Flex direction</Label>
        <Select
          id="flex-direction-select"
          options={[
            { name: "Column", value: "column" },
            { name: "Row", value: "row" }
          ]}
          value={flexDirection}
          onChange={handleChangeFlexDirection}
        />
        <Label htmlFor="justify-content-select">Justify Content</Label>
        <Select
          id="justify-content-select"
          options={[
            { name: "flex-start", value: "flex-start" },
            { name: "flex-end", value: "flex-end" },
            { name: "center", value: "center" },
            { name: "space-between", value: "space-between" },
            { name: "space-around", value: "space-around" }
          ]}
          value={justifyContent}
          onChange={handleChangeJustifyContent}
        />
        <Label htmlFor="align-items-select">Align Items</Label>
        <Select
          id="align-items-select"
          options={[
            { name: "flex-start", value: "flex-start" },
            { name: "flex-end", value: "flex-end" },
            { name: "center", value: "center" },
            { name: "space-between", value: "space-between" },
            { name: "space-around", value: "space-around" }
          ]}
          value={alignItems}
          onChange={handleChangeAlignItems}
        />
        <Button onClick={() => {}} type="submit">
          Generate Code
        </Button>
      </form>
    </div>
  );
}
