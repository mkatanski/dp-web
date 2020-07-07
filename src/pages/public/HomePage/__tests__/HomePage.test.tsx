/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import HomePage from "../HomePage";
import { withThemeProvider } from "_test-helpers";

jest.mock("components/PageTitle", () => ({
  PageTitle: ({ ...rest }: React.PropsWithChildren<{}>) => (
    <div id="PageTitle" data-props={rest} />
  )
}));

jest.mock("views/DeploymentsTableView", () => ({
  DeploymentsTableView: ({ ...rest }: React.PropsWithChildren<{}>) => (
    <div id="DeploymentsTableView" data-props={rest} />
  )
}));

jest.mock("components/ToggleableDrawer", () => ({
  ToggleableDrawer: ({ ...rest }: React.PropsWithChildren<{}>) => (
    <div id="ToggleableDrawer" data-props={rest} />
  )
}));

describe("pages", () => {
  describe("protected", () => {
    describe("HomePage", () => {
      it("should render HomePage component", () => {
        const tree = TestRenderer.create(withThemeProvider(<HomePage />));
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
