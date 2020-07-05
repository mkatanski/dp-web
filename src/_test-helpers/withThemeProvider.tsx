import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "lib/theme/ThemeProvider";
import { StyledTheme, Theme } from "styles/theme/_types";
import { createMuiTheme } from "@material-ui/core";

const testTheme: StyledTheme = {
  primary: "primary",
  secondary: "secondary",
  textPrimary: "textPrimary",
  textSecondary: "textSecondary",
  textInverse: "textInverse"
};

const muiTheme = createMuiTheme({
  direction: "ltr"
});

const theme: Theme = Object.assign(testTheme, muiTheme);

export const withThemeProvider = (Component: React.ReactNode) => (
  <DefaultThemeProvider theme={theme}>{Component}</DefaultThemeProvider>
);
