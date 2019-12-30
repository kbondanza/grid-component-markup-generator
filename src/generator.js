// 1. create components
//   a. grid component
//   b. checkbox
// 2. hook up the property controls package with the following components
// 3. create a node script that writes to a file the grid markup, can console.log it initially
import React, { useState, useCallback, useReducer } from "react";
import { Grid, Column } from "./components/grid";
import Button from "./components/button";
import Select from "./components/select";
import RowsInput from "./components/rows-input";
import ColumnsInput from "./components/columns-input";
import GutterInput from "./components/gutter-input";
import { getInitialState, reducer } from "@matthamlin/property-controls";

const rowsInitialState = getInitialState(RowsInput.propertyControls);
const columnsInitialState = getInitialState(ColumnsInput.propertyControls);
const gutterInitialState = getInitialState(GutterInput.propertyControls);

export default function Generator() {
  const [rows, setRows] = useReducer(reducer, rowsInitialState);
  const [columns, setColumns] = useReducer(reducer, columnsInitialState);
  const [gutterSize, setGutterSize] = useReducer(reducer, gutterInitialState);
  // const [flexDirection, setFlexDirection] = useState("row");
  // const [justifyContent, setJustifyContent] = useState("center");
  // const [alignItems, setAlignItems] = useState("center");

  // function handleChangeFlexDirection(event) {
  //   const { value } = event.target;
  //   setFlexDirection(value);
  // }

  // function handleChangeJustifyContent(event) {
  //   const { value } = event.target;
  //   setJustifyContent(value);
  // }

  // function handleChangeAlignItems(event) {
  //   const { value } = event.target;
  //   setAlignItems(value);
  // }

  // console.error(
  //   alignItems,
  //   "align items",
  //   justifyContent,
  //   "justify content",
  //   flexDirection,
  //   "flex dir",
  //   gutterSize,
  //   "gutter size",
  //   rows,
  //   "rows",
  //   columns,
  //   "columns"
  // );
  console.error(Array(Number(rows.value)), "rows");
  return (
    <div>
      {[...Array(Number(rows.value))].map((x, i) => (
        <Grid border="1px solid red" key={i}>
          {[...Array(Number(columns.value))].map((x, i) => (
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
        <RowsInput
          state={rows}
          dispatch={setRows}
          propertyControls={RowsInput.propertyControls}
        />
        <ColumnsInput
          state={columns}
          dispatch={setColumns}
          propertyControls={ColumnsInput.propertyControls}
        />
        <GutterInput
          state={gutterSize}
          dispatch={setGutterSize}
          propertyControls={GutterInput.propertyControls}
        />
        {/* 
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
        /> */}
        <Button onClick={() => {}} type="submit">
          Generate Code
        </Button>
      </form>
    </div>
  );
}
