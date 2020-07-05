import { Breakpoints } from "config/breakpoints";

export type MediaSize = {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
};

export const mediaSize: MediaSize = {
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`,
  largeDesktop: `@media (min-width: ${Breakpoints.largeDesktop}px)`
};
