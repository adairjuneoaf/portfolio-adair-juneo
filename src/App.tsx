import React from "react";

import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
