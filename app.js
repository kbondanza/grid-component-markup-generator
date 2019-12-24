import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>TEST</div>
    </ThemeProvider>
  );
}
