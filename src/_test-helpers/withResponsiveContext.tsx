import React from "react";
import { Context as ResponsiveContext } from "react-responsive";
import { Breakpoints } from "config/breakpoints";

export const withMobileSize = (Component: React.ReactNode) => (
  <ResponsiveContext.Provider value={{ width: Breakpoints.mobile }}>
    {Component}
  </ResponsiveContext.Provider>
);

export const withTabletSize = (Component: React.ReactNode) => (
  <ResponsiveContext.Provider value={{ width: Breakpoints.tablet }}>
    {Component}
  </ResponsiveContext.Provider>
);

export const withDesktopSize = (Component: React.ReactNode) => (
  <ResponsiveContext.Provider value={{ width: Breakpoints.desktop }}>
    {Component}
  </ResponsiveContext.Provider>
);

export const withLargeDesktopSize = (Component: React.ReactNode) => (
  <ResponsiveContext.Provider value={{ width: Breakpoints.largeDesktop }}>
    {Component}
  </ResponsiveContext.Provider>
);
