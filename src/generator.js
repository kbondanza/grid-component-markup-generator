// 1. create components
//   a. grid component
// 2. hook up the property controls package with the following components
// 3. create a script that writes the grid markup to display
// 4. display generated grid markup in a modal
// 5. create a copy hook to copy and paste the grid markup
// 6. style the grid generator
// 7. make grid component generator more flexible to work with any grid component
// 8. add context?
// 9. function to download code snippit?
// 10. click outside close for modal?
// 11. modal focus trapping?
import React, { useReducer, useState } from "react";
import { Grid, Column } from "./components/grid";
import Button from "./components/button";
import RowsInput from "./components/rows-input";
import ColumnsInput from "./components/columns-input";
import GutterInput from "./components/gutter-input";
import FlexDirectionSelect from "./components/flex-direction-select";
import JustifyContentSelect from "./components/justify-content-select";
import AlignItemsSelect from "./components/align-items-select";
import { getInitialState, reducer } from "@matthamlin/property-controls";
import Modal from "./components/modal";
import Box from "./components/box";

const rowsInitialState = getInitialState(RowsInput.propertyControls);
const columnsInitialState = getInitialState(ColumnsInput.propertyControls);
const gutterInitialState = getInitialState(GutterInput.propertyControls);
const flexDirectionInitialState = getInitialState(
  FlexDirectionSelect.propertyControls
);
const justifyContentInitialState = getInitialState(
  JustifyContentSelect.propertyControls
);
const alignItemsInitialState = getInitialState(
  AlignItemsSelect.propertyControls
);

export default function Generator() {
  const [rows, setRows] = useReducer(reducer, rowsInitialState);
  const [columns, setColumns] = useReducer(reducer, columnsInitialState);
  const [gutterSize, setGutterSize] = useReducer(reducer, gutterInitialState);
  const [flexDirection, setFlexDirection] = useReducer(
    reducer,
    flexDirectionInitialState
  );
  const [justifyContent, setJustifyContent] = useReducer(
    reducer,
    justifyContentInitialState
  );
  const [alignItems, setAlignItems] = useReducer(
    reducer,
    alignItemsInitialState
  );
  const [isOpen, setIsOpen] = useState(false);

  const rowsDisplayed = [...Array(Number(rows.value))];
  const columnsDisplayed = [...Array(Number(columns.value))];

  const generatedColumns = columnsDisplayed.map((x, i) => `<Column></Column>`);
  const generatedCode = rowsDisplayed.map((x, i) => `<Grid></Grid>`);

  return (
    <Box>
      <Box as="h1" textAlign="center">
        Grid Component Generator
      </Box>
      <Box as="p" textAlign="center">
        Geared for Design Systems to Generate Grid component markup for
        Developers to copy/paste or download to easily add to their features.
      </Box>
      <Box
        position="relative"
        display="grid"
        gridTemplateColumns="1fr 1fr"
        justifyItems="center"
        alignItems="center"
        maxWidth="fit-content"
        margin="auto"
      >
        <Box width="fit-content">
          {rowsDisplayed.map((x, i) => (
            <Grid
              border="1px solid red"
              key={i}
              alignItems={alignItems}
              justifyContent={justifyContent}
              flexDirection={flexDirection}
            >
              {columnsDisplayed.map((x, i) => (
                <Column
                  border="1px solid blue"
                  width="20px"
                  height="20px"
                  key={i}
                  margin={gutterSize}
                ></Column>
              ))}
            </Grid>
          ))}
        </Box>
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
          <p>Grid props</p>
          <FlexDirectionSelect
            state={flexDirection}
            dispatch={setFlexDirection}
            propertyControls={FlexDirectionSelect.propertyControls}
          />
          <JustifyContentSelect
            state={justifyContent}
            dispatch={setJustifyContent}
            propertyControls={JustifyContentSelect.propertyControls}
          />
          <AlignItemsSelect
            state={alignItems}
            dispatch={setAlignItems}
            propertyControls={AlignItemsSelect.propertyControls}
          />
          <p>Column props</p>
          <FlexDirectionSelect
            state={flexDirection}
            dispatch={setFlexDirection}
            propertyControls={FlexDirectionSelect.propertyControls}
          />
          <JustifyContentSelect
            state={justifyContent}
            dispatch={setJustifyContent}
            propertyControls={JustifyContentSelect.propertyControls}
          />
          <AlignItemsSelect
            state={alignItems}
            dispatch={setAlignItems}
            propertyControls={AlignItemsSelect.propertyControls}
          />
          <Button onClick={() => setIsOpen(true)} type="button">
            Generate Code
          </Button>
        </form>
        {isOpen && (
          <Modal onRequestClose={() => setIsOpen(false)}>
            <pre>
              <code>{generatedCode}</code>
            </pre>
            <Button>Copy to Clipboard</Button>
            <Button>Download snippet</Button>
          </Modal>
        )}
      </Box>
    </Box>
  );
}
