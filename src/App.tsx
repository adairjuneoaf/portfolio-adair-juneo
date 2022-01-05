import React from "react";

import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}
