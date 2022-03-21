import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import ApiGitHubProvider from "../contexts/ApiGitHubContext";

import FooterPage from "../components/FooterPage";

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

import { Container } from "../styles/pages/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Adair Juneo | Portfólio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ApiGitHubProvider>
          <Container>
            <Component {...pageProps} />
            <FooterPage />
          </Container>
        </ApiGitHubProvider>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
