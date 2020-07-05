import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Routes from "routes";
import { LoadingScreen } from "components/fallbacks/LoadingScreen";

import { MainStyle } from "styles/globalStyles";
import { ThemeProvider } from "lib/theme";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { StylesProvider } from "@material-ui/core/styles";

import { DefaultLightTheme } from "styles/theme/light";
import { configureStore } from "config/store";

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

const store = configureStore();

const App = () => {
  return (
    <div className="App">
      <ReduxProvider store={store}>
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
      </ReduxProvider>
    </div>
  );
};

export default App;
