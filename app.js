import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Generator from "./src/generator";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Generator />
    </ThemeProvider>
  );
}
