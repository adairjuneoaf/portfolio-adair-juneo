import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import ApiGitHubProvider from "../contexts/ApiGitHubContext";

import TechnologiesProfile from "../components/TechnologiesProfile";
import ExperienceProfile from "../components/ExperienceProfile";
import EducationHistory from "../components/EducationHistory";
import DataProfile from "../components/DataProfile";
import FooterPage from "../components/FooterPage";
import Profile from "../components/Profile";

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

import { Container, Content } from "../styles/pages/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Adair Juneo | Portfólio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ApiGitHubProvider>
          <Container>
            <Content>
              <aside className="profileInfos">
                <Profile />
                <DataProfile />
                <TechnologiesProfile />
                <ExperienceProfile />
                <EducationHistory />
              </aside>
              <Component {...pageProps} />
            </Content>
            <FooterPage />
          </Container>
        </ApiGitHubProvider>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
