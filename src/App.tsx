import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import { LoadingScreen } from "components/fallbacks/LoadingScreen";

import { MainStyle } from "styles/globalStyles";
import { ThemeProvider } from "lib/theme";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { StylesProvider } from "@material-ui/core/styles";

import { DefaultLightTheme } from "styles/theme/light";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={DefaultLightTheme}>
          <MaterialThemeProvider theme={DefaultLightTheme}>
            <MainStyle />
            <Router>
              <Suspense
                fallback={
                  <Container>
                    <LoadingScreen />
                  </Container>
                }
              >
                <Routes />
              </Suspense>
            </Router>
          </MaterialThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
