/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultTheme } from "styled-components";
import { Theme } from "styles/theme/_types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
