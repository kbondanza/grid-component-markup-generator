// Blockers
// fix row height
// create copy hook
// tool tip
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
import CustomElementInput from "./components/custom-element-input";
import GithubIcon from "./components/github-icon";
import Link from "./components/link";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/parser-babylon";
import useClipboard from "./components/useClipboard";

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
const customElementInitialState = getInitialState(
  CustomElementInput.propertyControls
);

export default function Generator({ theme }) {
  // Grid State
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
  const [customElement, setCustomElement] = useReducer(
    reducer,
    customElementInitialState
  );
  // Column State
  const [columnFlexDirection, setColumnFlexDirection] = useReducer(
    reducer,
    flexDirectionInitialState
  );
  const [columnJustifyContent, setColumnJustifyContent] = useReducer(
    reducer,
    justifyContentInitialState
  );
  const [columnAlignItems, setColumnAlignItems] = useReducer(
    reducer,
    alignItemsInitialState
  );
  const [columnCustomElement, setColumnCustomElement] = useReducer(
    reducer,
    customElementInitialState
  );
  const [isOpen, setIsOpen] = useState(false);

  const rowsDisplayed = [...Array(Number(rows.value))];
  const columnsDisplayed = [...Array(Number(columns.value))];

  const [copy, isCopied] = useClipboard();

  function generatedColumns() {
    // show the columnAlignItems prop only if the value does not equal the default value
    const showAlignItems =
      columnAlignItems.value !== "stretch"
        ? `alignItems="${columnAlignItems.value}"`
        : null;
    // show the columnJustifyContent prop only if the value does not equal the default value
    const showJustifyContent =
      columnJustifyContent.value !== "flex-start"
        ? `justifyContent="${columnJustifyContent.value}"`
        : null;
    // show the columnFlexDirection prop only if the value does not equal the default value
    const showFlexDirection =
      columnFlexDirection.value !== "row"
        ? `flexDirection="${columnFlexDirection.value}"`
        : null;
    // show the columnCustomElement prop only if the value does not equal the default value
    const showCustomElement =
      columnCustomElement.value !== "div"
        ? `as="${columnCustomElement.value}"`
        : null;
    return columnsDisplayed.map(
      (x, i) => `<Column ${showAlignItems}
    ${showJustifyContent}
    ${showFlexDirection}
    ${showCustomElement}></Column>`
    );
  }

  function generatedCode() {
    // show the alignItems prop only if the value does not equal the default value
    const showAlignItems =
      alignItems.value !== "stretch"
        ? `alignItems="${alignItems.value}"`
        : null;
    // show the justifyContent prop only if the value does not equal the default value
    const showJustifyContent =
      justifyContent.value !== "flex-start"
        ? `justifyContent="${justifyContent.value}"`
        : null;
    // show the flexDirection prop only if the value does not equal the default value
    const showFlexDirection =
      flexDirection.value !== "row"
        ? `flexDirection="${flexDirection.value}"`
        : null;
    // show the customElement prop only if the value does not equal the default value
    const showCustomElement =
      customElement.value !== "div" ? `as="${customElement.value}"` : null;
    const code = rowsDisplayed.map(
      (x, i) => `<Grid ${showAlignItems}
      ${showJustifyContent}
      ${showFlexDirection}
      ${showCustomElement}>${generatedColumns()}</Grid>`
    );
    const codeToDisplay = String(`<div>${code}</div>`).replace(/,|null/g, "");
    const formattedCode = prettier.format(codeToDisplay, {
      parser: "babel",
      plugins: [babelPlugin]
    });
    return formattedCode.replace(/;|<div>|<\/div>/g, "");
  }

  return (
    <Box
      bg={theme.colors.primary}
      height="100%"
      color={theme.colors.white}
      position="relative"
      overflowY="auto"
      padding="16px"
    >
      <Box mb="10" pb="10" borderBottom={`1px solid ${theme.colors.secondary}`}>
        <Box
          as="h1"
          textAlign="center"
          pt="10"
          pb="7"
          m="0"
          letterSpacing={theme.letterSpacing.large}
        >
          Grid Component Markup Generator
        </Box>
        <Box as="p" textAlign="center" maxWidth="780px" m="auto">
          Geared for Design Systems who use Flexbox based Grid components to
          generate Grid component markup for developers to copy/paste to easily
          add to their features.
        </Box>
      </Box>
      <Box
        position="relative"
        display="grid"
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        gridGap="48px"
        justifyItems="center"
        alignItems="flex-start"
        maxWidth="fit-content"
        margin="auto"
      >
        <Box
          width="100%"
          height="fit-content"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          border={`1px solid ${theme.colors.secondary}`}
        >
          {rowsDisplayed.map((x, i) => (
            <Grid
              key={i}
              alignItems={alignItems.value}
              justifyContent={justifyContent.value}
              flexDirection={flexDirection.value}
              as={customElement.value}
            >
              {columnsDisplayed.map((x, i) => (
                <Column
                  bg={theme.colors.tertiary}
                  key={i}
                  m={gutterSize.value}
                  alignItems={columnAlignItems.value}
                  justifyContent={columnJustifyContent.value}
                  flexDirection={columnFlexDirection.value}
                  as={columnCustomElement.value}
                >
                  <Box flex="1 1 100%" height="50px" />
                </Column>
              ))}
            </Grid>
          ))}
        </Box>
        <Box display="grid" gridTemplateColumns="1fr" gridGap="16px">
          <Box
            as="p"
            fontWeight="bold"
            fontSize="24px"
            letterSpacing={theme.letterSpacing.large}
          >
            Grid props
          </Box>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="16px">
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
            <CustomElementInput
              state={customElement}
              dispatch={setCustomElement}
              propertyControls={CustomElementInput.propertyControls}
            />
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
          </Box>
          <Box
            as="p"
            fontWeight="bold"
            fontSize="24px"
            letterSpacing={theme.letterSpacing.large}
            mt="5"
          >
            Column props
          </Box>
          <CustomElementInput
            state={columnCustomElement}
            dispatch={setColumnCustomElement}
            propertyControls={CustomElementInput.propertyControls}
          />
          <FlexDirectionSelect
            state={columnFlexDirection}
            dispatch={setColumnFlexDirection}
            propertyControls={FlexDirectionSelect.propertyControls}
          />
          <JustifyContentSelect
            state={columnJustifyContent}
            dispatch={setColumnJustifyContent}
            propertyControls={JustifyContentSelect.propertyControls}
          />
          <AlignItemsSelect
            state={columnAlignItems}
            dispatch={setColumnAlignItems}
            propertyControls={AlignItemsSelect.propertyControls}
          />
          <Button
            onClick={() => setIsOpen(true)}
            type="button"
            m="24px auto 0"
            maxWidth="300px"
          >
            Generate Code
          </Button>
        </Box>
        {isOpen && (
          <Modal onRequestClose={() => setIsOpen(false)}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              maxWidth="fit-content"
              m="auto"
              p="16px 0"
            >
              <Box
                bg={theme.colors.tertiary}
                p="16px"
                boxShadow={`0 0 0 2px ${theme.colors.secondary}`}
                color={theme.colors.tertiaryLight}
                borderRadius="5px"
                mb="32px"
                overflowY="auto"
              >
                <pre>
                  <code>{generatedCode()}</code>
                </pre>
              </Box>
              <Button onClick={() => copy(generatedCode())}>
                {isCopied ? "Copied!" : "Copy to Clipboard"}
              </Button>
            </Box>
          </Modal>
        )}
      </Box>
      <Box
        position="fixed"
        bottom="6"
        right="6"
        color={theme.colors.secondaryBright}
      >
        <Link>
          <GithubIcon title="Github" />
        </Link>
      </Box>
    </Box>
  );
}
