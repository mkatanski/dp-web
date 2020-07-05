import { Theme as MTheme } from "@material-ui/core";

export type StyledTheme = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  textInverse: string;
};

export type MuiTheme = MTheme;

export type Theme = StyledTheme & MuiTheme;
