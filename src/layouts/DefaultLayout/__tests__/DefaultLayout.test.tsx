/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { withThemeProvider } from "_test-helpers";
import DefaultLayout from "../DefaultLayout";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "testPath" })
}));

jest.mock(
  "layouts/LayoutBase",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="LayoutBase" {...rest}>
      {children}
    </div>
  )
);

jest.mock("components/TopBar", () => ({
  TopBar: ({ children }: React.PropsWithChildren<{}>) => (
    <div id="TopBar">{children}</div>
  )
}));

jest.mock("components/Sidebar", () => ({
  Sidebar: ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="Sidebar" data-props={rest}>
      {children}
    </div>
  )
}));

jest.mock("views/NavListView", () => ({
  NavListView: ({ ...rest }) => <div id="NavListView" data-props={rest} />
}));

jest.mock("hooks/usePendingTimer", () => ({
  usePendingTimer: jest.fn()
}));

describe("layouts", () => {
  describe("DefaultLayout", () => {
    it("should render DefaultLayout with children", () => {
      const tree = TestRenderer.create(
        withThemeProvider(<DefaultLayout>Some children</DefaultLayout>)
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
