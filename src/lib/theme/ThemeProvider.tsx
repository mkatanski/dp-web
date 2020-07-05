import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { StyledTheme } from "styles/theme/_types";
import { ThemeMode } from "./_types";
import { colors, createMuiTheme } from "@material-ui/core";
import typography from "./typography";

export const LS_THEME_KEY = "theme";
export const getSavedMode = (): ThemeMode =>
  window.localStorage.getItem(LS_THEME_KEY) === ThemeMode.Dark
    ? ThemeMode.Dark
    : ThemeMode.Light;

export type ThemeProviderProps = {
  theme: StyledTheme;
  children: React.ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const muiTheme = createMuiTheme({
    direction: "ltr",
    typography,
    overrides: {
      MuiLinearProgress: {
        root: {
          borderRadius: 3,
          overflow: "hidden"
        }
      },
      MuiListItemIcon: {
        root: {
          minWidth: 32
        }
      },
      MuiChip: {
        root: {
          backgroundColor: "rgba(0,0,0,0.075)"
        }
      },
      MuiInputBase: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: "light",
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        paper: colors.common.white
      },
      primary: {
        main: colors.indigo[600]
      },
      secondary: {
        main: "#5850EC"
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    }
  });

  return (
    <DefaultThemeProvider theme={Object.assign(theme, muiTheme)}>
      {children}
    </DefaultThemeProvider>
  );
};
